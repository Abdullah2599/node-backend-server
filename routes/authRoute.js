const express = require('express');
const Authentication = require('../middlewares/Authentication');
const userRequest = require('../requests/userRequest');

const authRouter =express.Router();

authRouter.post('/login', Authentication.login);
authRouter.post('/register',userRequest.validateRules(),userRequest.validate, Authentication.register);
authRouter.post('/logout', Authentication.logout);
authRouter.post('/verify', Authentication.verify);
module.exports = authRouter;