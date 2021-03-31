const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/TestimonialController');

// Get all testimonials
router.get('/', async (req, res) => {
    let testimonials = await testimonialController.getAllTestimonials();

    res.json(testimonials);
});

// Get single testimonial by id
router.get('/:id', async (req, res) => {
    let testimonial = await testimonialController.getTestimonialByID(req.params.id);

    res.json(testimonial);
});

// Create new testimonial
router.post('/', async (req, res) => {
    let newTestimonial = req.body;

    let result = await testimonialController.createTestimonial(newTestimonial);

    res.send(result.id);
});

// Update testimonial
router.put('/', async (req, res) => {
    let updatedTestimonial = req.body;

    await testimonialController.updateTestimonial(updatedTestimonial);

    res.send(`${updatedTestimonial.name} has been successfully updated!`);
});

// Remove an testimonial
router.delete('/', async (req, res) => {
    let testimonial = req.body;

    await testimonialController.deleteTestimonial(testimonial);

    res.send(`${testimonial.name} has been successfully deleted!`);
});

module.exports = router;
