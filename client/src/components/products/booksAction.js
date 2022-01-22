import {
    fetchAllBooksLoading,
    fetchAllBooksSuccess,
    fetchAllBooksFail,
    
} from "./booksSlice";
  
import {
    getAllBooks,
    
} from "../../api/bookApi";


export const fetchAllBooks = () => async (dispatch) => {
    dispatch(fetchAllBooksLoading());
    try {
        const response = await getAllBooks();
        response.books.length &&
        dispatch(fetchAllBooksSuccess(response));
    } catch (err) {
        dispatch(fetchAllBooksFail({error: true, message: err.message}));
    }
};