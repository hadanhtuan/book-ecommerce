import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reqPasswordReset } from './passwordAction';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const dispatch = useDispatch();

	const [email, setEmail] = useState("");

    const { isLoading, error, message } = useSelector(state => state.password);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
    
        dispatch(reqPasswordReset(email));
    };

    const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};
    
    return (
        <div className="col-lg-6">
            <div className="card2 card border-0 px-4 pb-8 m-4">
                <h4>“A room without books is like a body without a soul.”</h4>
                <p>― Marcus Tullius Cicero</p>
            </div>
            <div className="row px-3 mb-4">
                <h2  className="mb-0 mr-4 mt-2">Chúng tôi sẽ gửi email lấy lại mật khẩu cho bạn</h2>
            </div>
            {message && (
                <div class={`alert alert-${error ? 'danger' : 'success'}`} role="alert">
                    {message}
                </div>
            )}
            
            {isLoading && (
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )}

            <form className="form-group row px-3" onSubmit={handleOnSubmit}>
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Nhập tài khoản email của bạn</h6>
                </label>
                <input
                    class="form-control"
                    className="mb-4"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Nhập tài khoản email của bạn..."
                    required
                />
                <div className="row mb-3 px-3">
                    <button type="submit" className="btn btn-blue text-center">
                        Gửi email
                    </button>
                </div>
            </form>
            
            <div className="row mb-4 px-3">
                <small className="font-weight-bold">
                    Đã nhớ mật khẩu? <Link to='/login' className="text-danger ">Đăng nhập</Link>
                </small>
            </div>
        </div>
    );
};

export default ForgotPassword;
