import { configureStore } from "@reduxjs/toolkit";

import passwordReducer from "./components/reset-password/passwordSlice";
import postBookReducer from "./pages/admin-dashboard/postBookSlice";
import booksReducer from "./components/products/booksSlice";
import cbooksReducer from "./components/cbook/cbookSlice";
import authReducer from "./components/auth/authSlice";
import orderReducer from "./pages/order-books/orderSlice";
import orderedReducer from "./pages/user-ordered/orderedSlice";
import userReducer from "./components/user/userSlice";



const store = configureStore({
	reducer: {
		password: passwordReducer,
		postBook: postBookReducer,
		books: booksReducer,
		cbooks: cbooksReducer,
		auth: authReducer,
		order: orderReducer,
		user: userReducer,
		ordered: orderedReducer,
	},
});

export default store