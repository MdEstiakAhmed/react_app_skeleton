import axios from "axios";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {}
});

export const getData = async (url, headers) => {
    try {
        const response = await AppInstance.get(url, { headers });
        return response.data;
    }
    catch (error) {
        return { Error: error.message };
    }
}

export const postData = async (url, headers, formData) => {
    try {
        const response = await AppInstance.post(url, formData, { headers });
        return response.data;
    }
    catch (error) {
        return { Error: error.message };
    }
}