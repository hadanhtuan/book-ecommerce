import "./css/Auth.css";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Redirect } from "react-router-dom";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword"

const Auth = ({ authRoute }) => {
  const isAuthenticated = false;
  let body

  if (isAuthenticated) return <Redirect to='/' />
    else {
        body = (
            <>
                {
                    (authRoute === 'login') && <LoginForm />
                }
                {
                    (authRoute === 'register') && <RegisterForm />
                }
                {
                    (authRoute === 'forgot-password') && <ForgotPassword />
                }
                {
                    (authRoute === 'reset-password') && <ResetPassword />
                }
            </>
        )
    }
  return (
    <div>
        <Navbar />
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
          <div className="card card0 border-0">
            <div className="row d-flex">
              <div className="col-lg-6">
                <div className="card1 pb-5">
                  <div className="row px-3 justify-content-center mt-4 mb-5 border-line ">
                    <img
                      src="https://i.pinimg.com/564x/9b/6b/f1/9b6bf14a96b5bcb5510cad8e1c0e738c.jpg"
                      className="image mt-5"
                    />
                  </div>
                </div>
              </div>
              {body}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Auth;
