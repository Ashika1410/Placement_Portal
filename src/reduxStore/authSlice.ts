import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "staff" | "student" | "company";
  avatarUrl: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: User; token: string }>) {
      console.log("Action Payload:", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    loadUserFromStorage(state) {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (user && token) {
        state.user = JSON.parse(user);
        state.token = token;
      }
    },
  },
});

export const { login, setUser, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;


