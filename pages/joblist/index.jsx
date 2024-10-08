import React from 'react';
import {getAllJobs}  from "../../services/Job"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

export default function Joblist() {
  const [jobs , setJobs]= useState([]);
  const navigate =useNavigate();
  const  [isLoading , setIsLoading]= useState(true);
  useEffect(()=> {
    getAllJobs().then(res => {
  setJobs(res.data);
  setIsLoading(false)
})

  }, [])
  const routeToJobDetail = (id)=>{
    navigate(`/list/${id}`)
  } 
  
  const isEditable = (id)=>{
   const token= localStorage.getItem("token")
   const decoded =decodeToken(token)
   console.log(decoded)
   return decoded.id == id
  } 
  
  return (
   
  <>
      <p>Joblist page</p>

      {isLoading ? <p>Loading...</p>:jobs.map((job ,idx)=>
        <p key={idx}>
          {job.companyName}
          <span> {job.salary}</span>
          {job._id? <button onClick={() =>routeToJobDetail(job._id)}>view</button>:null}
          {isEditable(job.creator) ? <button>Edit</button> : null}


        </p>
      )}
  
  </>
   
  )
}
