import { getUserPending, getUserSuccess, getUserFail, deleteUserSuccess } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const response = await fetchUser();

    if (response.error === false) {

        dispatch(getUserSuccess(response));
    }

    dispatch(getUserFail(response));
  } catch (err) {
    dispatch(getUserFail({error: true, message: err.message}));
  }
};

export const deleteUserProfile = () => (dispatch) => {
      dispatch(deleteUserSuccess())   
};


