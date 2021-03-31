const CosmosHelper = require('../__utils__/CosmosHelper');
const cosmosContainer = new CosmosHelper('Testimonials').container;

const getTestimonialByID = async (id) => {
    try {
        const querySpec = {
            query: `SELECT * FROM c WHERE c.id = '${id}'`
        };
        const { resources: testimonials } = await cosmosContainer.items
            .query(querySpec)
            .fetchAll();

        return testimonials[0];

    } catch (err) {
        console.log(err);
        throw new Error(`Error in getAllTestimonials calling CosmosDB: ${err.message}`);
    }
}

module.exports = {
    getTestimonialByID: getTestimonialByID,

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
    },

    createTestimonial: async (testimonialToCreate) => {
        console.log(testimonialToCreate)
        const { resource: createdTestimonial } = await cosmosContainer.items.create(testimonialToCreate);

        return createdTestimonial;
    },

    updateTestimonial: async (testimonialToUpdate) => {
        let id = testimonialToUpdate.id;
        let partitionKey = testimonialToUpdate.name;

        // Replace existing testimonial object with new one
        const { resource: updatedTestimonial } = await cosmosContainer
            .item(id, partitionKey)
            .replace(testimonialToUpdate);

        return updatedTestimonial;
    },

    deleteTestimonial: async (testimonialToDelete) => {
        let id = testimonialToDelete.id;
        let partitionKey = testimonialToDelete.name;

        const { resource: result } = await cosmosContainer
            .item(id, partitionKey)
            .delete();

        return result;
    }
}
