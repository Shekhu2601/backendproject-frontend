import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchJobById  } from '../../services/Job';

export default function Jobdetail() {
  const param =useParams();
  const [job ,setJob]=useState({});
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    setIsLoading(true)
    fetchJobById(param.id).then(res=>{
      setJob(res.data)
    }).finally(()=>{
      setIsLoading(fetchJobById)
    })
  },[param.id])
  return (
   <>
    
      <p>Jobdetail page</p>
    {isLoading? <p>Loading..</p>:<p> {job.companyName} </p>}
   
   
   </>
  )
}
