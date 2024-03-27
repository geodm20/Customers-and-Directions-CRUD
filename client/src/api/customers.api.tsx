import axios from "axios";

export const getAllCustomers = () => {
    return axios.get("http://localhost:8000/customers/")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
}

export const getAllLocations = () => {
    return axios.get("http://localhost:8000/locations/")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
}