import {
    searchBooks,
    categoryBooks, 
} from "../../components/products/booksSlice";

export const filterSearchBooks = (key) => (dispatch) => {
    dispatch(searchBooks(key));
};

