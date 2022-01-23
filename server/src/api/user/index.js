const router = require('express').Router();
const userController = require('./user.controller');

const { verifyToken } = require('../../middlewares/authMiddleware');
  
router.get('/', verifyToken, userController.getUser) //api/user/orders
router.get('/orders', verifyToken, userController.getOrders) //api/user/orders
router.post('/orders', verifyToken, userController.postOrders) //api/user/orders

module.exports = router;



