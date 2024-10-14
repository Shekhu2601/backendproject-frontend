import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchJobById  } from '../../services/Job';
import { isEditable} from "../../helper"


export default function Jobdetail() {
  const params = useParams();
  const navigate =useNavigate();
  const [job ,setJob]=useState(null);
  const canEdit = job == null ? false : isEditable(job?.creator);
  const [isLoading,setIsLoading]=useState(true);
  const [isErrore,setIsErrore]=useState(false)
  useEffect(()=>{
    setIsLoading(true)
    fetchJobById(params.id).then(res=>{
      setJob(res.data)
      
    })
    .catch((e)=>{
      setIsErrore(true)
      
    }).finally(()=>{
      setIsLoading(false)
    })
  },[params.id])
  const navigatetoEditpage =()=>{
    navigate(`/editjob/${params.id}`)
  } 
  return (
   <>
    
      <p>Jobdetail page</p>
    {isLoading? <p>Loading..</p>:isErrore ?<p> Something went wrong </p> :<p> {job.companyName} </p>}

    {canEdit ? <button onClick={navigatetoEditpage}>Edit</button> :null} 
   
   
   </>
  )
}
