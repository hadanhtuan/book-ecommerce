import { axiosInstance } from "../../api/baseAPI";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    console.log(res.error);
    window.localStorage.setItem("accessToken", res.token);
    if (!res.error) {
      console.log("success");
      dispatch(loginSuccess());
      await window.localStorage.setItem("isAuthenticated", true);
      return true;
    }
  } catch (error) {
    dispatch(loginFailure());
    window.localStorage.removeItem("isAuthenticated");
    window.localStorage.removeItem("accessToken");
    return false;
  }
};
