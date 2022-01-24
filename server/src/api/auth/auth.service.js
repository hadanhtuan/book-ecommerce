const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require("../../models/user");
const crypto = require("crypto");
const sendEmail = require('../../../utils/sendEmail');


async function register(body) {
    const email = body.email;
    const password = body.password;
    
    try {
        const user = await User.findOne({ email: email })
        if (user) {
            return {
                error: true,
                message: "Email đã được sử dụng",
            };
        }    
        const newUser = new User({
            email,
            password
        });
            
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(newUser.password, salt)
        
        if (hash.err) 
            throw err;
                    
        newUser.password = hash;
        
        await newUser.save()
                        
        const _token = jwt.sign({ _id: newUser._id }, "secret");
        return {
            error: false,
            message: "Đăng ký thành công!",
            token: _token,
            role: newUser.role
        };     
    }
    catch(err) {
        return {
            error: true,
            message: err.message
        }
    }
}
async function login(body) {
    const email = body.email;
    const password = body.password;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
        return {
            error: true,
            message: "Tài khoản hoặc mật khẩu không đúng"
        };
        } else {
            const passcmp = await bcrypt.compare(password, user.password);
            if (passcmp) {
                var _token = jwt.sign({ _id: user._id }, "secret");
                return {
                    error: false,
                    message: "Đăng nhập thành công",
                    token: _token,
                    role: user.role
                };
            } else {
                return {
                error: true,
                message: "Tài khoản hoặc mật khẩu không đúng"
                };
            }
        }
    } catch (err) {
        return {
        error: true,
        message: err.message
        };
    }
}

async function forgotPassword({email})
{
    try {
        //kiem tra co email trong database khong
        const user = await User.findOne({email: email})
        if(!user)
        {
            return {
                error: true,
                message: 'khong ton tai email',
            }
        }

        // tạo resetToken và hash nó rồi lưu token và thời gian hết hạn token vào database
        const resetToken = user.getResetPasswordToken();
        await user.save();

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

        // HTML Message
        const message = `
        <h1>You have requested a password reset</h1>
        <p>Please make a put request to the following link:</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>    `;

        try {
            await sendEmail({
                to: user.email,
                subject: "Reset Password",
                text: message,
            });
        
            return{ error: false, message: "Đã gửi email" };
        
        } 
        catch (err) {
            console.log(123);
            console.log(err);
            
            //xóa reset token nếu bị lỗi không gửi mail được
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
        
            await user.save();
            return {
                error: false, 
                message: "Không thể gửi email"
            }
        
        }
    }   
    catch (err) {
        return {
            error: true,
            message: err.message
        }
    }  
}

async function resetPassword(body, resetToken)
{
    // hash token lấy được từ param để so sánh với token lưu trong database
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken.replace(/\s+/g, ''))
    .digest("hex");

    try {
        //kiểm tra xem reset token còn hạn không
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return {
                error: true,
                message: 'Token quá hạn',
            }
        }

        //hash password 
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(body.password, salt)

        user.password = hash;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return{
            error: true,
            message: "Cập nhật mật khẩu thành công",
        };
    } catch (err) {
        return {
            error: true,
            message: err.message
        }
    }
}

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
