import axios from 'axios';

export default axios.create({
    baseURL: "http://hat-game-backend/api",
    headers: {
        Accept: "application/json",
    },
});