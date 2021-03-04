import Api from './Api';

const getTestimonials = async () => {
    let testimonialResponse = await Api().get('/testimonial');

    return testimonialResponse.data;
}

export { getTestimonials }
