const { signup, login } = require('backend\Controllers\AuthController.js');
const { signupValidation, loginValidation } = require('backend\Middlewares\AuthValidation.js');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;