const CosmosHelper = require('../__utils__/CosmosHelper');

const cosmosContainer = new CosmosHelper('Company').container;

module.exports = {
    getCompanyData: async () => {
        try {
            const querySpec = {
                query: 'SELECT * FROM c WHERE c.id = "1"' // this item contains all MavMP company data
            };
            const { resources: companyData } = await cosmosContainer.items
                .query(querySpec)
                .fetchAll();
    
            return companyData[0];

        } catch (err) {
            console.log(err);
            throw new Error(`Error in getCompanyData calling CosmosDB: ${err.message}`);
        }
    }
}
