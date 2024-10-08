import axios from "axios";
import { handleApiResponse } from "../helper";
export const ragister =async(data)=>{
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/ragister`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return handleApiResponse(res); }


    export const login =async(data)=>{
        const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        });
        return res; }