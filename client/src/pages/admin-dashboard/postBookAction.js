import {
    postBookPending,
    postBookSuccess,
    postBookFail,
  } from "./postBookSlicer";

  import { postNewBook } from "../../api/bookApi";
  
  export const postBook = (formData) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch(postBookPending());
  
        const response = await postNewBook(formData);

        if (response.error === false) {
            dispatch(postBookSuccess(response));
        }

        return dispatch(postBookFail(response));

      } catch (err) {
        dispatch(postBookFail({error: true, message: err.message}));
      }
    });
  };