const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require("../../models/user");


  async function register(body) {
    const email = body.email;
    const password = body.password;

    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return {
          error: true,
          message: "Email đã được sử dụng",
        };
      }
      const newUser = new User({
        email,
        password,
      });

      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(newUser.password, salt);

      if (hash.err) throw err;

      newUser.password = hash;

      await newUser.save();

      const _token = jwt.sign({ _id: newUser._id }, "secret");
      return {
        error: false,
        message: "Đăng ký thành công!",
        token: _token,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
}

async function login(body) {
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return {
        error: true,
        message: "Email hoặc mật khẩu không đúng",
      };
    }
    const result = await bcrypt.compare(body.password, user.password);

    if (!result) {
      console.log(result.res);
      return {
        error: true,
        message: "Email hoặc mật khẩu không đúng",
      };
    }
    const accessToken = jwt.sign(
      {
        _id: user._id
      },
      "secret"
    );

    if (result) {
      return {
        error: false,
        message: "Đăng nhập thành công",
        token: accessToken,
      };
    }
  } catch (err) {
    return {
        error: true,
        message: "Đăng nhập thất bại"
    }
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
