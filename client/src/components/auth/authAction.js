import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./authSlice";
import {
    userLogin,
    userRegister
} from "../../api/authApi";
import { deleteUserProfile, getUserProfile } from "../user/userAction";


export const login = (userInfo, history) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await userLogin(userInfo);
      console.log(response)


      if (response.error === false) {
        dispatch(loginSuccess(response));
        window.localStorage.setItem("accessToken", response.token)        
        dispatch(getUserProfile())
        history.push("/")    
    }

      dispatch(loginFailure(response));
    } catch (err) {
      dispatch(loginFailure({error: true, message: err.message}));
      window.localStorage.removeItem("accessToken");
    }
  };

  export const register = (userInfo, history) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await userRegister(userInfo);
      console.log(response)


      if (response.error === false) {
        dispatch(loginSuccess(response));
        window.localStorage.setItem("accessToken", response.token)        
        dispatch(getUserProfile())
        history.push("/")    
      }

      dispatch(loginFailure(response));
    } catch (err) {
      dispatch(loginFailure({error: true, message: err.message}));
      window.localStorage.removeItem("accessToken");
    }
  };

  export const logout = () => async (dispatch) => {
		window.localStorage.removeItem("accessToken");
    dispatch(deleteUserProfile())
		dispatch(logoutSuccess({error: false, message: 'Đăng xuất thành công'}));
  };
