
const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('', userController.list);

userRouter.get('/:id', userController.findById);

userRouter.post('', userController.create);

userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.delete);

module.exports = userRouter;