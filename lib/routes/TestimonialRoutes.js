const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/TestimonialController');

router.get('/', async (req, res) => {
    let testimonials = await testimonialController.getAllTestimonials();

    res.json(testimonials);
});

module.exports = router;
