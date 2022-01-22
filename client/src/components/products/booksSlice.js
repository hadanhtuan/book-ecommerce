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
    //   state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchAllBooksFail: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      state.error = payload.error;
    },
    // searchTickets: (state, { payload }) => {
    //   state.searchTicketList = state.tickets.filter((row) => {
    //     if (!payload) return row;

    //     return row.subject.toLowerCase().includes(payload.toLowerCase());
    //   });
    // },
    // fetchSingleTicketLoading: (state) => {
    //   state.isLoading = true;
    // },
    // fetchSingleTicketSuccess: (state, { payload }) => {
    //   state.selectedTicket = payload;
    //   state.isLoading = false;
    //   state.error = "";
    // },
    // fetchSingleTicketFail: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // replyTicketLoading: (state) => {
    //   state.isLoading = true;
    // },
    // replyTicketSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.replyMsg = payload;
    // },
    // replyTicketFail: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.replyTicketError = payload;
    // },
    // closeTicketLoading: (state) => {
    //   state.isLoading = true;
    // },
    // closeTicketSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.replyMsg = payload;
    // },
    // closeTicketFail: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
    // resetResponseMsg: (state) => {
    //   state.isLoading = false;
    //   state.replyTicketError = "";
    //   state.replyMsg = "";
    // },
  },
});

const { reducer, actions } = booksSlice;

export const {
  fetchAllBooksLoading,
  fetchAllBooksSuccess,
  fetchAllBooksFail,
} = actions;

export default reducer;
