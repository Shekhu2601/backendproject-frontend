import axios from "axios";
import {AddTokenToHeader } from "../helper";
export function getAllJobs() {
   const headers = AddTokenToHeader({ headers: {} });
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/job`,{
        headers
    }
    );
     if(res.status==401){
        localStorage.removeItem("token");
        alert("you are logged out")
        window.location ="/login"
    }
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