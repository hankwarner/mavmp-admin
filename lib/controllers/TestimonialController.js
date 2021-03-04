const CosmosHelper = require('../__utils__/CosmosHelper');

const cosmosContainer = new CosmosHelper('Testimonials').container;

module.exports = {
    getAllTestimonials: async () => {
        try {
            const querySpec = {
                query: 'SELECT * FROM c'
            };
            const { resources: testimonials } = await cosmosContainer.items
                .query(querySpec)
                .fetchAll();

            return testimonials;
    
        } catch (err) {
            console.log(err);
            throw new Error(`Error in getAllTestimonials calling CosmosDB: ${err.message}`);
        }
    }
}
