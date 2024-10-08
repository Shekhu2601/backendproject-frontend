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