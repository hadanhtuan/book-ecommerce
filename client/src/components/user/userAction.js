import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {
    userLogin,
    userRegister
} from "../../api/userApi";
import { useHistory} from "react-router-dom";


export const login = (userInfo, history) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await userLogin(userInfo);
      console.log(response)


      if (response.error === false) {
        dispatch(loginSuccess(response));
        window.localStorage.setItem("accessToken", response.token)        
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
        history.push("/")    
      }

      dispatch(loginFailure(response));
    } catch (err) {
      dispatch(loginFailure({error: true, message: err.message}));
      window.localStorage.removeItem("accessToken");
    }
  };
