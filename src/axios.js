import axios from 'axios';

const instance = axios.create({
    // the API (cloud function) URL
    baseURL: 'https://us-central1-mk-528aa.cloudfunctions.net/api',
});

export default instance;