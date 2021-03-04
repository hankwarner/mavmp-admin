const express = require('express');
const router = express.Router();
const emailController = require('../controllers/EmailController');

router.post('/request-offer', (req, res) => {
    let response = emailController.requestOffer(req.body);

    res.send(response);
});

router.post('/contact-us', async (req, res) => {
    let response = emailController.contactUs(req.body);

    res.send(response);
});

module.exports = router;
