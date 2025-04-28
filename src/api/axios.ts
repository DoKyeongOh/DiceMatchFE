import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리 로직
    if (error.response?.status === 401) {
      // 토큰 만료 등의 처리
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
