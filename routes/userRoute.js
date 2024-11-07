
const express = require('express');
const userController = require('../controllers/userController');
const userRequest = require('../requests/userRequest');
const userRouter = express.Router();

userRouter.get('', userController.list);

userRouter.get('/:id', userController.findById);

userRouter.post('',userRequest.validateRules(),userRequest.validate,  userController.create);

userRouter.put('/:id',userRequest.validateRules(true),userRequest.validate,  userController.update);

userRouter.delete('/:id', userController.delete);

module.exports = userRouter;