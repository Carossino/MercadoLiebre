// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const registerController = require('../controllers/registerController');

router.get('/', registerController.create); /* GET - home page */
router.post('/', registerController.store); /* GET - home page */

module.exports = router;
