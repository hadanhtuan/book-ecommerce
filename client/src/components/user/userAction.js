import { getUserPending, getUserSuccess, getUserFail, deleteUserSuccess } from "./userSlice";
import { fetchUser } from "../../api/userApi";
import { setAuth } from "../auth/authSlice";

export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserPending());
  try {

    const response = await fetchUser();

    if (response.error === false) {
        dispatch(getUserSuccess(response));
        dispatch(setAuth());
    }

    dispatch(getUserFail(response));
  } catch (err) {
    dispatch(getUserFail({error: true, message: err.message}));
  }
};

export const deleteUserProfile = () => (dispatch) => {
      dispatch(deleteUserSuccess())   
};


