/**
 * RB2B Script Loader
 * Conditionally loads the RB2B tracking script based on environment variables
 */

export const loadRB2B = (): void => {
  // Check if RB2B is disabled via environment variable
  if (import.meta.env.VITE_RB2B_DISABLE === "true") {
    console.log(
      "RB2B script loading disabled via VITE_RB2B_DISABLE environment variable"
    );
    return;
  }

  // Check if RB2B is already loaded
  if (window.reb2b && window.reb2b.invoked) {
    return;
  }

  // Load RB2B script
  (function () {
    var reb2b = (window.reb2b = window.reb2b || []);
    if (reb2b.invoked) return;
    reb2b.invoked = true;
    reb2b.methods = ["identify", "collect"];
    reb2b.factory = function (method: string) {
      return function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        reb2b.push(args);
        return reb2b;
      };
    };
    for (var i = 0; i < reb2b.methods.length; i++) {
      var key = reb2b.methods[i];
      reb2b[key] = reb2b.factory(key);
    }
    reb2b.load = function (key: string) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" +
        key +
        "/reb2b.js.gz";
      var first = document.getElementsByTagName("script")[0];
      if (first && first.parentNode) {
        first.parentNode.insertBefore(script, first);
      }
    };
    reb2b.SNIPPET_VERSION = "1.0.1";
    reb2b.load("DNXY8HKXZGO0");
  })();
};

// Declare global types for TypeScript
declare global {
  interface Window {
    reb2b: any;
  }
}
