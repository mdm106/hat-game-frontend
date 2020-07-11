import axios from 'axios';

export default axios.create({
    baseURL: "https://immense-earth-89289.herokuapp.com/api",
    headers: {
        Accept: "application/json",
    },
});