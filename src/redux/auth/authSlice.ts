import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  user: {
    id: string;
    username: string;
  };
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = {
  user: { id: "", username: "" },
  isLoggedIn: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    print: (state) => {
      console.log(current(state));
    },
  },

  extraReducers: () => {},
});

export const selectAuth = (state: RootState) => state.auth;

export const { print } = authSlice.actions;

export default authSlice.reducer;
