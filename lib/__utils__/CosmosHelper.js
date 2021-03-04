
const CosmosClient = require("@azure/cosmos").CosmosClient;

const config = {
    endpoint: "https://mavmp.documents.azure.com:443/",
    key: process.env.DB_KEY,
    databaseId: process.env.DB_ID
};
const { endpoint, key, databaseId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);

class CosmosHelper {
    constructor(containerName) {
        this.container = database.container(containerName);
    }
}

module.exports = CosmosHelper;
