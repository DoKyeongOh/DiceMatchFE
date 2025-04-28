import { BasicAccount, UserDto } from "../../types/auth.type";
import { post } from "../utils";

export const register = async (data: BasicAccount): Promise<UserDto> => {
  try {
    return (await post<UserDto>("/account/basic/register", data)).data;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: BasicAccount): Promise<UserDto> => {
  try {
    return (await post<UserDto>("/account/basic/login", data)).data;
  } catch (error) {
    throw error;
  }
};
