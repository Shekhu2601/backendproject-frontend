import axios from "axios";
import {AddTokenToHeader } from "../helper";
export function getAllJobs() {
   const headers = AddTokenToHeader({ headers: {} });
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job`,{
        headers
    }
    );
    return res;
}

export function fetchJobById(id) {
    // return new Promise((resolve, reject) => {
    //     reject(new Error("Something went wrong"));
    // })
    const headers = AddTokenToHeader({ headers: {} });
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job/${id}`, {
        headers
    });
    return res;
}