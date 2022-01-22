import { configureStore } from "@reduxjs/toolkit";

import passwordReducer from "./components/reset-password/passwordSlice";
import postBookReducer from "./pages/admin-dashboard/postBookSlicer";
import booksReducer from "./components/products/booksSlice";
import userSlice from "./components/user/userRedux";

const store = configureStore({
  reducer: {
    password: passwordReducer,
    postBook: postBookReducer,
    books: booksReducer,
    user: userSlice.reducer,
  },
});

export default store;
