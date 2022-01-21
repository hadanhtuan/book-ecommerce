const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require("../../models/user");


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
            token: _token
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
        };
      } else {
        return {
          error: true,
          message: "Tài khoản hoặc mật khẩu không đúng"
        };
      }
    }
  } catch (errorr) {
    return {
      error: true,
      message: "Đăng nhập thất bại"
    };
  }
}
async function forgotPassword()
{
    
}
async function resetPassword()
{
    
}

module.exports = {
    register,
    login,      
    forgotPassword,
    resetPassword
}



