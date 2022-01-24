import {
    fetchCBooksLoading,
    fetchCBooksSuccess,
    fetchCBooksFail,
    
} from "./cbookSlice";
  
import {
    getCBooks,
    
} from "../../api/bookApi";


export const fetchCBooks = (category) => async (dispatch) => {
    dispatch(fetchCBooksLoading());
    try {
        const response = await getCBooks(category);
        response.books.length &&
        dispatch(fetchCBooksSuccess(response));
    } catch (err) {
        dispatch(fetchCBooksFail({error: true, message: err.message}));
    }
};