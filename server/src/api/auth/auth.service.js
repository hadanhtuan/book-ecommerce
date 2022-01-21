var jwt = require("jsonwebtoken");
var User = require("../../models/user");
var bcrypt = require("bcryptjs");
var cookie = require("cookie-parser");

async function register(body) {
  const email = body.email;
  const password = body.password;
  let errors = false;

  if (!email || !password) {
    errors = true;
  }

  if (errors) {
    return {
      error: true,
      message:
        "Đăng ký không thành công, thông tin đăng ký không được để trống",
      token: "",
    };
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        return {
          error: true,
          message: "Đăng ký không thành công, email đã được sử dụng",
          token: "",
        };
      } else {
        const newUser = new User({
          email,
          password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                var account = User.findOne({ email: email });
                jwt.sign({ _id: account._id }, "sup3rh4rds3cr3t");
                return {
                  error: false,
                  message: "Đăng ký thành công, bây giờ bạn có thể đăng nhập",
                  token: ""
                };
              })
              .catch((err) => {
                console.log(err);
                return {
                  error: true,
                  message: "Đã xảy ra lỗi khi đăng ký",
                  token: "",
                };
              });
          });
        });
      }
    });
  }
}

async function login(body) {
  const username = body.email;
  const password = body.password;
  try {
    const account = await User.findOne({ email: username });
    if (!account) {
      return {
        error: true,
        message: "Tài khoản hoặc mật khẩu không đúng",
        token: "",
      };
    } else {
      const passcmp = await bcrypt.compare(password, account.password);
      if (passcmp) {
        var _token = jwt.sign({ _id: account._id }, "sup3rh4rds3cr3t");
        return {
          error: false,
          message: "Đăng nhập thành công",
          token: _token,
        };
      } else {
        return {
          error: true,
          message: "Tài khoản hoặc mật khẩu không đúng",
          token: "",
        };
      }
    }
  } catch (errorr) {
    console.log(errorr);
    return {
      error: true,
      message: "Đăng nhập thất bại",
      token: "",
    };
  }
}

async function forgotPassword() {}
async function resetPassword() {}

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
