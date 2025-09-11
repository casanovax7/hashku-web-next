#!/bin/bash

# Test script to verify the hashku-next-web to hashku-ai-workflow integration
echo "🚀 Testing Hashku Contact Form Integration"
echo "=========================================="

# Test 1: Check if API endpoint is accessible
echo "📡 Testing API endpoint accessibility..."
response=$(curl -s -o /dev/null -w "%{http_code}" http://hashku-ai-workflow.test/api/form-submissions \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"form_type":"contact","first_name":"Integration","last_name":"Test","email":"integration@test.com","message":"API test"}')

if [ "$response" = "201" ]; then
    echo "✅ API endpoint is working correctly (HTTP 201)"
else
    echo "❌ API endpoint returned HTTP $response"
    exit 1
fi

# Test 2: Check if frontend environment is configured
echo "🌐 Checking frontend environment configuration..."
if [ -f "/Users/mcasanova/Repositories/hashku-next-web/.env" ]; then
    if grep -q "VITE_API_BASE_URL=http://hashku-ai-workflow.test/api" /Users/mcasanova/Repositories/hashku-next-web/.env; then
        echo "✅ Frontend environment variable is correctly configured"
    else
        echo "❌ Frontend environment variable is not correctly configured"
        exit 1
    fi
else
    echo "❌ Frontend .env file not found"
    exit 1
fi

# Test 3: Verify database connection and recent submissions
echo "💾 Checking recent database submissions..."
cd /Users/mcasanova/Repositories/hashku-ai-workflow
count=$(php artisan tinker --execute="echo \App\Models\FormSubmission::count();" 2>/dev/null)

if [ "$count" -gt "0" ]; then
    echo "✅ Database has $count form submissions"
else
    echo "❌ No form submissions found in database"
    exit 1
fi

echo ""
echo "🎉 All integration tests passed!"
echo "=========================================="
echo "✅ Laravel Herd API: http://hashku-ai-workflow.test/api"
echo "✅ Frontend Dev Server: http://localhost:5173/"
echo "✅ Contact form is ready to use!"
echo ""
echo "You can now:"
echo "1. Visit http://localhost:5173/ in your browser"
echo "2. Navigate to the contact section"
echo "3. Fill out and submit the contact form"
echo "4. Form data will be stored in the hashku-ai-workflow database"
