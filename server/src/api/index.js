const router = require("express").Router();

//import module
const user = require("./user");
const auth = require("./auth");
const book = require("./book");

//routing
router.use("/auth", auth);
// router.use("/user", user);
router.use("/book", book);

module.exports = router;









