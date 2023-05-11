import axios from 'axios';
const BASE_URL = 'http://localhost:8000/api/';
// const BASE_URL = "https://60ea-81-196-28-211.ngrok-free.app/api/";

export function otpRequest(email, password) 
{
    return axios.post(`${BASE_URL}otp`, { email, password });
}

export function verifyOtpRequest(email, otp) 
{
    return axios.post(`${BASE_URL}verify-otp`, { email, otp });
}

export function getUser()
{
    return axios.get(`${BASE_URL}user`);
}

export function googleRedirect()
{
    window.location = `${BASE_URL}auth/google/redirect`
}

export function facebookRedirect()
{
    window.location = `${BASE_URL}auth/facebook/redirect`
}

export const admin = {
    stage: {
        add: (data) => {
            return axios.post(`${BASE_URL}admin/stage/add`, data);
        },
        get: {
            all: () => {
                return axios.get(`${BASE_URL}admin/stage/get/all`);
            },
            one: (id) => {
                return axios.get(`${BASE_URL}admin/stage/get/one/${id}`);
            }
        }
    }
}
