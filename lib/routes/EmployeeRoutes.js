const express = require('express');
const router = express.Router();
const empController = require('../controllers/EmployeeController');

// Get all employees
router.get('/', async (req, res) => {
    let employees = await empController.getAllEmployees();

    res.json(employees);
});

// Get single employee by id
router.get('/:id', async (req, res) => {
    let employee = await empController.getEmployeeByID(req.params.id);

    res.json(employee);
});

// Create new employee
router.post('/', async (req, res) => {
    let newEmployee = req.body;

    let empResult = await empController.createEmployee(newEmployee);

    res.send(empResult.id);
});

// Update employee
router.put('/', async (req, res) => {
    let updatedEmployee = req.body;

    await empController.updateEmployee(updatedEmployee);

    res.send(`${updatedEmployee.name} has been successfully updated!`);
});

// Remove an employee
router.delete('/', async (req, res) => {
    let employee = req.body;

    await empController.deleteEmployee(employee);

    res.send(`${employee.name} has been successfully deleted!`);
});

// Update image url
router.put('/image', async (req, res) => {
    let id = req.body.id;
    let imageUrl = req.body.url;

    await empController.updateImageUrl(id, imageUrl);

    res.send('Image was successfully updated!');
});

// Create new blob from image file
router.post('/image', async (req, res) => {
    let imageFile = req.body;

    await empController.uploadNewImage(imageFile);

    res.send('Success!');
});

module.exports = router;
