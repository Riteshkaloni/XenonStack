import axios from 'axios'
import { Constants } from './Constants';

export const BASE_URL = "http://localhost:5113/";
export const projectname = "Intern Test";

export const loginApi = async (endpoint, data) => {
    return await axios.post(BASE_URL + endpoint, data).then((result) => {
        if (result.data.error_code == 200 ) {
            console.log("Success", result.data)
            return result.data
        } else {
            console.log("Error", result.data)
            return result.data
        }
    }).catch(e => {
        console.log("Error", e)
        return e.response
    });
}

export const otpApi = async (endpoint, data) => {
    return await axios.get(BASE_URL + endpoint).then((result) => {
        if (result.data.error_code == 0 ) {
            console.log("Success", result)
            return result.data
        } else {
            console.log("Error", result.data)
            return 500
        }
    }).catch(e => {
        console.log("Error", e)
        return 500
    });
}

export const postBearerToken = async (endpoint, data) => {
    let token = localStorage.getItem(Constants.APP_KEY)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.post( BASE_URL+endpoint , data , config ).then((result) => {
        return result.data
    }).catch(e => {
        return e
    });
}
export const putBearerToken = async (endpoint, data) => {
    let token = localStorage.getItem(Constants.APP_KEY)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.put( BASE_URL+endpoint , data , config ).then((result) => {
        return result.data
    }).catch(e => {
        console.log("shaun",e.response.data)
        return e.data
    });
}
export const getBearerToken = async (endpoint) => {
    let token = localStorage.getItem(Constants.APP_KEY)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get( BASE_URL+endpoint , config ).then((result) => {
        return result.data
    }).catch(e => {
        return 500
    });
}