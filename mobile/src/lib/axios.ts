import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://172.31.147.193:3333'
});