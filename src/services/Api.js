import axios from 'axios';

export default () => {
    
    if (process.env.NODE_ENV != 'production') {
        return axios.create({
            baseURL: 'http://localhost:8081/api',
            timeout: 8000,
        });
    } else {
        return axios.create({
            baseURL: 'api',
            timeout: 8000,
        });
    }

    
}
