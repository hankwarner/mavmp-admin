const express = require('express');
const router = express.Router();
const companyController = require('../controllers/CompanyController');

router.get('/', async (req, res) => {
    let companyData = await companyController.getCompanyData();

    res.json(companyData);
});

module.exports = router;
