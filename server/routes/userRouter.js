const Router = require ('express')
const router = new Router()
const UserController = require ('../controllers/userController')
const userController = require('../controllers/userController')
const express = require('express');
const router = express.Router();
const express = require('express');
const router = express.Router();
const UserController = require ('../controllers/userController')
const userController = require('../controllers/userController')

router.post('/registration', UserController.registration)
router.post('/login',UserController.login)
router.get('/auth', UserController.check )



module.exports = router