export interface BasicRegistrationData {
  identity: string;
  password: string;
  passwordCheck: string;
}

export interface BasicLoginData {
  identity: string;
  password: string;
}

export interface UserDto {
  userId: string;
  nickname: string;
}
