![Angel Oak](https://angeloakcompanies.com/wp-content/themes/cms/img/logo-companies.svg)

# Upload Rate Sheets

This project is used to upload rate sheets to both Quick Pricer and Quick Quote Azure databases.

The project is written using a Sql Server/Express/Vue/Node stack. Sql Server is accessed using the [mssql](https://www.npmjs.com/package/mssql) package.

Client side web requests are made using [axios](https://www.npmjs.com/package/axios).

Styling is accomplished with [BootstrapVue](https://bootstrap-vue.org/).

This project is a part of an Azure Devops pipeline. Committing to the master branch will result in a push to production.

## Apps

### Quick Pricer/ Agency Rates Upload

<!-- This function takes an incoming post and returns an array of rate objects. The majority of the logic generating the rate table is located in Queries.js. [Sample.json](https://github.com/AngelOakCompanies/AzureQuickQuotePricer/blob/master/QuickPricer/sample.json) contains an example payload. Errors are returned in arrays when data validation fails.

The function also contains a sub folder with some SQL queries for building the tables that are required for this project. Data for these tables is populated through the [Quick Pricer Rate Importer](https://github.com/AngelOakCompanies/QuickPricerRateImporter) -->
This portion of the app is run from the Agency view and has compenents for rates, product adjustments and cltv adjustments. An excel file is consumed on the front end and a model representing the new values is pushed to the backend to be added to sql.

### Quick Quote/ Non QM Rates Upload
```diff
!NOT IMPLEMENTED
```

## Order Of Operations To Launch To Azure

The below instructions include all of the steps required to succesfully launch this application to an azure function

1. Push to master branch