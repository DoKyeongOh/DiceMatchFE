import { BasicLoginData, BasicRegistrationData, UserDto } from "../../types/auth.type";
import { post } from "../utils";

export const register = async (data: BasicRegistrationData): Promise<string> => {
  try {
    return (await post<string>("/account/basic", data)).data;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: BasicLoginData): Promise<string> => {
  try {
    return (await post<string>("/account/basic/login", data, { withCredentials: true })).data;
  } catch (error) {
    throw error;
  }
};
