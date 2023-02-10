import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://172.31.147.193:3333'
});