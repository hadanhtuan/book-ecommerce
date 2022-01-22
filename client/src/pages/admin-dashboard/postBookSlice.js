import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  message: "",
};
const postBookSlice = createSlice({
  name: "postBook",
  initialState,
  reducers: {
    postBookPending: (state) => {
      state.isLoading = true;
    },
    postBookSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    postBookFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.message;
    },
    restMessage: (state) => {
      state.isLoading = true;
      state.message = "";
    },
  },
});

export const {
    postBookPending,
    postBookSuccess,
    postBookFail,
    restMessage,
} = postBookSlice.actions;

export default postBookSlice.reducer;