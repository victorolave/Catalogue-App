import axios from 'axios'

const API_URL = process.env.REACT_APP_CATALOGUE_API

export const axiosApi = axios.create({
    baseURL: API_URL
})
