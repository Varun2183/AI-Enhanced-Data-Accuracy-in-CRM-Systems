import axios from 'axios';

// Base API configuration
const API = axios.create({
    baseURL: "http://localhost:8000",  // Backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
