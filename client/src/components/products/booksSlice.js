import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  isLoading: false,
  error: "",
  message: "",
  searchBooksList: [],
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
      state.error = payload.error;
			state.message = payload.message;
      state.books = payload.books;
      state.isLoading = false;
      state.searchBooksList = payload.books;
    },
    fetchAllBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.error = payload.error;
    },
    searchBooks: (state, {payload}) => {
      state.searchBooksList = state.books.filter((book) => {
        if (!payload) return book;

        return book.title.toLowerCase().includes(payload.toLowerCase());
      });
    },
    
  },

});

const { reducer, actions } = booksSlice;

export const {
  fetchAllBooksLoading,
  fetchAllBooksSuccess,
  fetchAllBooksFail,
  searchBooks,
} = actions;

export default reducer;
