const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandConroller')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router