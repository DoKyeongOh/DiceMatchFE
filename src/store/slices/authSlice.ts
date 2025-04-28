import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "../../types/auth.type";

interface AuthState {
  userId: string | undefined;
  nickname: string | undefined;
}

const initialState: AuthState = {
  userId: undefined,
  nickname: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserDto>) => {
      state.userId = action.payload.userId;
      state.nickname = action.payload.nickname;
    },
    logout: (state) => {
      state.userId = undefined;
      state.nickname = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
