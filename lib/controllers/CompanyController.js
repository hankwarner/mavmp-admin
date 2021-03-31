const CosmosHelper = require('../__utils__/CosmosHelper');

const cosmosContainer = new CosmosHelper('Company').container;

module.exports = {
    getCompanyData: async () => {
        try {
            const querySpec = {
                query: 'SELECT * FROM c WHERE c.id = "d09456d0-4168-4466-b019-c88eee170086"' // this item contains all MavMP company data
            };
            const { resources: companyData } = await cosmosContainer.items
                .query(querySpec)
                .fetchAll();
    
            return companyData[0];

        } catch (err) {
            console.log(err);
            throw new Error(`Error in getCompanyData calling CosmosDB: ${err.message}`);
        }
    },

    updateCompany: async (companyToUpdate) => {
        let id = companyToUpdate.id;
        let partitionKey = id;
        console.log(id)
        console.log(partitionKey)

        // Replace existing testimonial object with new one
        const { resource: updatedCompany } = await cosmosContainer
            .item(id, partitionKey)
            .replace(companyToUpdate);

        return updatedCompany;
    }
}
