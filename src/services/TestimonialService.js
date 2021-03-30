import Api from './Api';

const getTestimonialByID = async (id) => {
    let testimonialResponse = await Api().get(`/testimonial/${id}`);
    console.log(testimonialResponse);

    return testimonialResponse.data;
}

const getTestimonials = async () => {
    let testimonialResponse = await Api().get('/testimonial');

    return testimonialResponse.data;
}

const updateTestimonial = async (updatedTestimonial) => {
    try {
        let response = await Api().put('/testimonial', updatedTestimonial);

        if(response == 'Error'){
            throw new Error('There was a problem saving the new data. Please try again.');
        }

        return response;

    } catch (e) {
        return e.message;
    }
}

const createTestimonial = async (newTestimonial) => {
    try {
        let response = await Api().post('/testimonial', newTestimonial);

        if(response == 'Error'){
            throw new Error('There was a problem adding the new testimonial. Please try again.');
        }

        return response;

    } catch (e) {
        return 'Error';
    }
}

const deleteTestimonialById = async (testimonial) => {
    try {
        let response = await Api().delete('/testimonial', { data: testimonial });

        if(response == 'Error'){
            throw new Error('There was a problem deleting the testimonial. Please try again.');
        }

        return response;

    } catch (e) {
        return 'Error';
    }
}

export { getTestimonials, updateTestimonial, createTestimonial, deleteTestimonialById, getTestimonialByID }
