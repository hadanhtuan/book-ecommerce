import { configureStore } from "@reduxjs/toolkit";

import passwordReducer from "./components/reset-password/passwordSlice";
import postBookReducer from "./pages/admin-dashboard/postBookSlice";
import booksReducer from "./components/products/booksSlice";
import authReducer from "./components/auth/authSlice";
import orderReducer from "./pages/order-books/orderSlice";
import userReducer from "./components/user/userSlice";


const store = configureStore({
	reducer: {
		password: passwordReducer,
		postBook: postBookReducer,
		books: booksReducer,
		auth: authReducer,
		order: orderReducer,
		user: userReducer,
	},
});

export default store