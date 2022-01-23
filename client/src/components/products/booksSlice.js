import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
  error: "",
  message: "",
  //   replyTicketError: "",
  //   searchTicketList: [],
  //   selectedTicket: {},
  //   replyMsg: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchAllBooksLoading: (state) => {
      state.isLoading = true;
    },
    fetchAllBooksSuccess: (state, { payload }) => {
      state.books = payload.books;
      state.isLoading = false;
    },
    fetchAllBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.error = payload.error;
    },
    fetchFilteredBooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

const { reducer, actions } = booksSlice;

export const {
  fetchAllBooksLoading,
  fetchAllBooksSuccess,
  fetchAllBooksFail,
  fetchFilteredBooks,
} = actions;

export default reducer;
