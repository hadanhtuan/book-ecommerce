import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   books: [
//     {
//       id: uuidv4(),
//       title: "MEO MEO MEO MEO MEO",
//       price: "300.000d",
//       category: "aaaaaaaaaaaa",
//       description: "Nguyen con meo",
//       coverImage:
//         "https://www.dtv-ebook.com/images/cover_1/chuyen-con-meo-va-con-chuot-ban-than-cua-no-luis-sepulveda.jpg",
//     },
//     {
//       id: uuidv4(),
//       title: "MEO MEO MEO MEO MEO",
//       price: "300.000d",
//       category: "aaaaaaaaaaaa",
//       description: "Nguyen con meo",
//       coverImage:
//         "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
//     },
//     {
//       id: uuidv4(),
//       title: "MEO MEO MEO MEO MEO",
//       price: "300.000d",
//       category: "aaaaaaaaaaaa",
//       description: "Nguyen con meo",
//       coverImage:
//         "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
//     },
//   ],
//   isLoading: false,
//   error: "",
//   message: "",
//   //   replyTicketError: "",
//   //   searchTicketList: [],
//   //   selectedTicket: {},
//   //   replyMsg: "",
// };

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: uuidv4(),
        title: "SACH VE MEO",
        price: "300.000d",
        category: "aaaaaaaaaaaa",
        description: "Nguyen con meo",
        coverImage:
          "https://www.dtv-ebook.com/images/cover_1/chuyen-con-meo-va-con-chuot-ban-than-cua-no-luis-sepulveda.jpg",
      },
      {
        id: uuidv4(),
        title: "SACH VE CHIM",
        price: "300.000d",
        category: "aaaaaaaaaaaa",
        description: "Nguyen con meo",
        coverImage:
          "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
      },
      {
        id: uuidv4(),
        title: "SACH VE LOAI NGUOI",
        price: "300.000d",
        category: "aaaaaaaaaaaa",
        description: "Nguyen con meo",
        coverImage:
          "https://static.scientificamerican.com/blogs/cache/file/7B451A3D-DC88-45A1-A5FD2D07D3146A30_source.jpg?w=590&h=800&169258BA-F569-48E1-848D1CEF8B65D3B2",
      },
    ],
    isLoading: false,
    error: "",
    message: "",
    //   replyTicketError: "",
    //   searchTicketList: [],
    //   selectedTicket: {},
    //   replyMsg: "",
  },
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

export const { fetchAllBooksLoading, fetchAllBooksSuccess, fetchAllBooksFail } =
  actions;

export default reducer;
