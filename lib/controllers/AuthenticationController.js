const AzureStorageBlob = require("@azure/storage-blob");

module.exports = {
    async getSASToken(){
        var startDate = new Date();
        // Set to 5 minutes previous to avoid clock skew
        startDate.setMinutes(startDate.getMinutes() - 5);
        var expiryDate = new Date(startDate);
        expiryDate.setMinutes(startDate.getMinutes() + 60);

        let acctName = process.env.ACCT_NAME;
        let acctKey = process.env.ACCT_KEY;
        let sharedKeyCredential = new AzureStorageBlob.StorageSharedKeyCredential(acctName, acctKey);

        // Account SAS
        let resourceTypes = new AzureStorageBlob.AccountSASResourceTypes();
        resourceTypes.container = true;
        resourceTypes.object = true;
        resourceTypes.service = true;

        let services = new AzureStorageBlob.AccountSASServices();
        services.blob = true;

        let permissions = new AzureStorageBlob.AccountSASPermissions();
        permissions.read = true;
        permissions.add = true;
        permissions.create = true;
        permissions.write = true;

        let signatureValues = {
            startsOn: startDate,
            expiresOn: expiryDate,
            permissions: permissions,
            resourceTypes: resourceTypes.toString(),
            services: services.toString()
        };

        let sasQueryParams = AzureStorageBlob.generateAccountSASQueryParameters(signatureValues, sharedKeyCredential);
        let sasToken = sasQueryParams.toString();

        return sasToken;
    }
}
