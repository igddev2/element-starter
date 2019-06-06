import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://10.3.132.105:8000/api/'
})