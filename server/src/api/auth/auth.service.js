const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

async function register(body) {
  const email = body.email;
  const password = body.password;
    await User.findOne({ email: email }).then((user) => {
      if (user) {
        return {
          error: true,
          message: "Email đã được sử dụng",
        };
      } else {
        const newUser = new User({
          email,
          password
        });
        await bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                var _token = await jwt.sign({ _id: user._id }, "secret");
                return {
                  error: false,
                  message: "Đăng ký thành công!",
                  token: _token
                };
              })
              .catch((err) => {
                console.log(err);
                return {
                  error: true,
                  message: "Đã xảy ra lỗi khi đăng ký",
                };
              });
          });
        });
      }
    });
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



