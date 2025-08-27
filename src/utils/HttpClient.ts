import axios from "axios";

const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_SERVICE,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

HttpClient.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
// HttpClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.error("API error:", error.response);
//     if (error.response?.status === 401) {
//       console.log("Unauthorized! Redirecting to login...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default HttpClient;
