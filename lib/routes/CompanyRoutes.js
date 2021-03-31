const express = require('express');
const router = express.Router();
const companyController = require('../controllers/CompanyController');

router.get('/', async (req, res) => {
    let companyData = await companyController.getCompanyData();

    res.json(companyData);
});

// Update company
router.put('/', async (req, res) => {
    let updatedCompany = req.body;

    await companyController.updateCompany(updatedCompany);

    res.send(`Company info has been successfully updated!`);
});

module.exports = router;
