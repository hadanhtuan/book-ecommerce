const router = require('express').Router();
const userController = require('./user.controller');

const { verifyToken } = require('../../middleware/authMiddleware');
  
router.get('/orders', verifyToken, userController.getOrders) //api/user/orders

module.exports = router;
