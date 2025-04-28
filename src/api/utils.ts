import axiosInstance from "./axios";
import { ApiResponse, ErrorResponse } from "./types";

export const get = async <T>(
  url: string,
  params?: object
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const post = async <T>(
  url: string,
  data?: object
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const put = async <T>(
  url: string,
  data?: object
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const del = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

const handleError = (error: any): ErrorResponse => {
  if (error.response) {
    return {
      message: error.response.data.message || "서버 오류가 발생했습니다.",
      status: error.response.status,
      error: error.response.data.error,
    };
  }
  return {
    message: "네트워크 오류가 발생했습니다.",
    status: 500,
  };
};
