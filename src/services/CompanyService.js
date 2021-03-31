import Api from './Api';

const getCompanyData = async () => {
    let companyResponse = await Api().get('/company');

    return companyResponse.data;
}

const updateCompany = async (updatedCompany) => {
    try {
        let response = await Api().put('/company', updatedCompany);

        if(response == 'Error'){
            throw new Error('There was a problem saving the new data. Please try again.');
        }

        return response;

    } catch (e) {
        return e.message;
    }
}

export { getCompanyData, updateCompany }
