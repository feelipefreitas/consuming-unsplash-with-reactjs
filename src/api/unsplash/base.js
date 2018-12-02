import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d42eb216ae791f7c594f45e9d176a8862036b446bcb9429cee7c23aba69c333b'
    },
});