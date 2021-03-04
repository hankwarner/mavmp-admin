import Api from './Api';

const getCompanyData = async () => {
    let companyResponse = await Api().get('/company');

    return companyResponse.data;
}

export { getCompanyData }
