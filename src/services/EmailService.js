import Api from './Api';

const sendOfferRequest = async (formData) => {
    let response = await Api().post('/email/request-offer', formData);

    return response.data;
}

const sendContactRequest = async (formData) => {
    let response = await Api().post('/email/contact-us', formData);

    return response.data;
}

export { sendOfferRequest, sendContactRequest }
