import Api from './Api';

const getSasToken = async () => {
    let authResponse = await Api().get('/authentication');
    let sasToken = authResponse.data;

    return sasToken;
}

export { getSasToken };
