import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cbooks: [],
  isLoading: false,
  error: "",
  message: "",
//   replyTicketError: "",
//   searchTicketList: [],
//   selectedTicket: {},
//   replyMsg: "",
};

const cbooksSlice = createSlice({
  name: "cbooks",
  initialState,
  reducers: {
    fetchCBooksLoading: (state) => {
      state.isLoading = true;
    },
    fetchCBooksSuccess: (state, { payload }) => {
      state.error = payload.error;
			state.message = payload.message;
      state.cbooks = payload.books;
      state.isLoading = false;
      state.searchBooksList = payload.books;
    },
    fetchCBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.error = payload.error;
    },
    
  },

});

const { reducer, actions } = cbooksSlice;

export const {
  fetchCBooksLoading,
  fetchCBooksSuccess,
  fetchCBooksFail,
  searchBooks,
} = actions;

export default reducer;
