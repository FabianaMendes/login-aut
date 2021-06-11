import axios from 'axios';

const API_URL = 'http://jrwee.mocklab.io';

declare interface Credentials {
    email: string;
    password: string;
}

declare interface User {
    birthday: string;
    email: string;
    gender: string;
    id: number;
    name: string;
    state: string;
    avatar: string;
}

type Token = string;

export function login(credentials: Credentials) {
    return axios.post(`${API_URL}/user/login`, credentials);
}