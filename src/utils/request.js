import axios from "axios";

const AppInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {}
});

export const getData = async (url, headers) => {
    try {
        return (await AppInstance.get(url, { headers })).data;
    }
    catch (error) {
        return { Error: error.message };
    }
}

export const postData = async (url, headers, formData) => {
    try {
        return (await AppInstance.post(url, formData, { headers })).data;
    }
    catch (error) {
        return { Error: error.message };
    }
}