// API service for communicating with the Laravel backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  console.warn("VITE_API_BASE_URL not set, form submissions may not work");
}

export interface FormSubmissionData {
  form_type: "contact" | "newsletter" | "demo_request";
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  metadata?: Record<string, any>;
}

export interface ApiResponse<T = any> {
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle Laravel validation errors
      if (response.status === 422 && data.errors) {
        const errorMessage = Object.values(data.errors).flat().join(", ");
        throw new Error(errorMessage);
      }

      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  }

  async submitForm(formData: FormSubmissionData): Promise<ApiResponse> {
    return this.request<ApiResponse>("/form-submissions", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Method for future use - getting form submissions (requires auth)
  async getFormSubmissions(params?: {
    form_type?: string;
    status?: string;
    search?: string;
    page?: number;
    per_page?: number;
  }): Promise<ApiResponse> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/form-submissions${queryString ? `?${queryString}` : ""}`;

    return this.request<ApiResponse>(endpoint);
  }
}

export const apiService = new ApiService();

// Backward compatibility helper - matches the existing Supabase interface
export const submitContactForm = async (submission: {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  try {
    const response = await apiService.submitForm({
      form_type: "contact",
      ...submission,
      source: "website",
    });

    return { error: null, data: response.data };
  } catch (error) {
    return {
      error: {
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      data: null,
    };
  }
};
