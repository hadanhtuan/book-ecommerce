import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = { email: payload.email, role: payload.role, _id: payload._id};
      state.error = payload.error;
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    },
    deleteUserSuccess: (state, { payload }) => {
        state.user = {};
    }
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
  deleteUserSuccess
} = userSlice.actions;

export default userSlice.reducer;
