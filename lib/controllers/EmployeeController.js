const CosmosHelper = require('../__utils__/CosmosHelper');
const cosmosContainer = new CosmosHelper('Employees').container;

const getEmployeeByID = async (id) => {
    try {
        const querySpec = {
            query: `SELECT * FROM c WHERE c.id = '${id}'`
        };
        const { resources: employees } = await cosmosContainer.items
            .query(querySpec)
            .fetchAll();

        return employees[0];

    } catch (err) {
        console.log(err);
        throw new Error(`Error in getAllEmployees calling CosmosDB: ${err.message}`);
    }
}

module.exports = {
    getEmployeeByID: getEmployeeByID,

    getAllEmployees: async () => {
        try {
            const querySpec = {
                query: 'SELECT * FROM c'
            };
            const { resources: employees } = await cosmosContainer.items
                .query(querySpec)
                .fetchAll();

            return employees;
    
        } catch (err) {
            console.log(err);
            throw new Error(`Error in getAllEmployees calling CosmosDB: ${err.message}`);
        }
    },

    createEmployee: async (employeeToCreate) => {
        const { resource: createdEmployee } = await cosmosContainer.items.create(employeeToCreate);

        return createdEmployee;
    },

    updateEmployee: async (employeeToUpdate) => {
        let id = employeeToUpdate.id;
        let partitionKey = employeeToUpdate.name;

        // Replace existing employee object with new one
        const { resource: updatedEmployee } = await cosmosContainer
            .item(id, partitionKey)
            .replace(employeeToUpdate);

        return updatedEmployee;
    },

    deleteEmployee: async (employeeToDelete) => {
        let id = employeeToDelete.id;
        let partitionKey = employeeToDelete.name;

        const { resource: result } = await cosmosContainer
            .item(id, partitionKey)
            .delete();

        return result;
    },

    updateImageUrl: async (id, newImageUrl) => {
        // Get the current employee object 
        let employeeObj = await getEmployeeByID(id);

        // Set the new image url on the employee object
        employeeObj.image = newImageUrl;

        // Submit to CosmosDB
        await cosmosContainer
            .item(id, employeeObj.name)
            .replace(employeeObj);
    }
}
