import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://172.31.158.35:19006'
});