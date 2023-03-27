import axios from 'axios'
import { BASE_URL } from './apiConfig'

const apiRequestHandler = async ({ data, url, method }) => {
    const baseUrl = BASE_URL + url
    const requestConfig = {
        method: method.toLowerCase(),
        data,
        url: baseUrl,
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    try {
        const response = await axios(requestConfig);
        return response?.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response.data;
        }
        return "Something went wrong";
    }
};

export default apiRequestHandler;