const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthenticationController');

router.get('/', async (req, res) => {
    let sasToken = await authController.getSASToken();

    res.send(sasToken);
});

module.exports = router;
