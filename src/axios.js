import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://happyorganizer-38749-default-rtdb.firebaseio.com/'
});

export default instance;