const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', itemController.getOne)

module.exports = router
