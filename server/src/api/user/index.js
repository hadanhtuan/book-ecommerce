const router = require('express').Router();
const userController = require('./user.controller');
  
router.get('/orders', userController.getOrders) //api/user/orders

module.exports = router;
