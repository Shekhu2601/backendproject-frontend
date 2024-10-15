import Form from "../../componets/form";
import { useState } from "react";
import styles from "./addJob.module.css"
import pageimg from './WallpaperDog.png'
import "./style.css"


import { adj } from "../../services/Job";
import { useNavigate } from "react-router-dom";
export default function addJob() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        logo: "",
        position:"",
        salary:"",
        jobType:"",// dropdown,
        remote: false,
        location:" ",
        description: "",
        about:"",
        information:"",
        skills:"",

        
        
       
    });
    const [btn ,setBtn]=useState(" + Add Job")
    const [error, setError] = useState({
        companyName: false,
        
        logo: false,
        position: false,
        salary: false,
        jobType: false,
        remote: false,
        location: false,
        description: false,
        about: false,
        information: false,
        skills: false,
        
    });
    const ChosenSkills = () => {
        return <div>
            {formData.skills.split(",").map((skill, idx) => <p key={idx}>{skill}</p>)}
        </div>
    }
    const formFields = [
        {
            companyName: "CompanyName",
            type: "text",
            className :"inputs",
            label:"Company Name",
            
            placeholder: "Enter your name",
            value: formData.companyName,
            onChange: (e) => {
                setFormData({ ...formData, companyName: e.target.value })
            }
        },
        
        {
            name: "logo",
            type: "text",
            label:"Add logo URL",
            className :"inputs",
            placeholder: "Enter job logo",
            value: formData.logo,
            onChange: (e) => {
                setFormData({ ...formData, logo: e.target.value })
            }
        },
        {
            name: "position",
            type: "text",
            label:"Job position",
            className :"inputs",
            placeholder: "Enter job position",
            value: formData.position,
            onChange: (e) => {
                setFormData({ ...formData, position: e.target.value })
            }
        },
        {
            name: "salary",
            type: "text",
            label:" Monthly salary",
            className :"inputs",
            placeholder: "Enter Amount in rupees",
            value: formData.salary,
            onChange: (e) => {
                setFormData({ ...formData, salary: e.target.value })
            }
        },
        {
            name: "jobType",
            type: "dropdown",
            label: "Job Type",
            values: [ "Select","Full-time", "Part-time", "Internship"],
            label:" Job Type",
            className :"dropdown",
            
            value: formData.jobType,
            onChange: (e) => {
                setFormData({ ...formData, jobType: e.target.value })
            }
        },
        {
            name: "remote",
            type: "checkbox",
            label: "Remote/office",
            className :"checkbox",
            value: formData.remote,
            onChange: (e) => {
                setFormData({ ...formData, remote: e.target.checked })
            }
        },
        {
            name: "location",
            type: "text",
            placeholder: "Enter job location",
            value: formData.location,
            className :"inputs",
            label:"Location",
            onChange: (e) => {
                setFormData({ ...formData, location: e.target.value })
            }
        },
        {
            name: "description",
            type: "textarea",
            label:" Job Description",
            className :"inputs",
            placeholder: "Enter job description",
            value: formData.description,
            onChange: (e) => {
                setFormData({ ...formData, description: e.target.value })
            }
        },
        {
            name: "about",
            type: "textarea",
            label:" About",
            className :"inputs",
            placeholder: "Enter job about",
            value: formData.about,
            onChange: (e) => {
                setFormData({ ...formData, about: e.target.value })
            }
        },
        {
            name: "information",
            type: "textarea",
            label:" Information",
            className :"inputs",
            placeholder: "Enter job information",
            value: formData.information,
            onChange: (e) => {
                setFormData({ ...formData, information: e.target.value })
            }
        },
        {
            name: "skills",
            type: "textarea",
            label:" Skils",
            className :"inputs",
            chosen: <ChosenSkills />,
            placeholder: "Enter job skills (add comma for separate skills)",
            value: formData.skills,
            onChange: (e) => {
                setFormData({ ...formData, skills: e.target.value })
            }
        },
      
          
         
          
     
          
      
    
    ]
    const onSubmit = async (e) =>  {
        e.preventDefault();
        let isError = false;
        Object.keys(errorMessages).forEach(key => {
            if (!errorMessages[key].isValid) {
                isError = true;
                errorMessages[key].onError();
            }
        })
        if (!isError) {
            console.log(formData);
            const res = await adj(formData);
            if (res.status === 201) {
                alert("Job added successfully");
                navigate("/list");
            }
            else {
                alert("Something went wrong");
            }
        }
        else {
            alert("Something went wrong");
        }
    }
    const errorMessages = {
        companyName: {
            message: "CompanyName is required",
            isValid: formData.companyName.length > 0,
            onError: () => {
                setError((error) => ({ ...error, companyName: true }))
          
      },
        
        },
        logo: {
            message: "Logo is required",
            isValid: formData.logo.length > 0,
            onError: () => {
                setError((error) => ({ ...error, logo: true }))
            }
        },
        position: {
            message: "Position is required",
            isValid: formData.position.length > 0,
            onError: () => {
                setError((error) => ({ ...error, position: true }))
            }
        },
        salary: {
            message: "Salary is required",
            isValid: formData.salary.length > 0,
            onError: () => {
                setError((error) => ({ ...error, salary: true }))
            }
        },
        jobType: {
            message: "Job type is required",
            isValid: formData.jobType.length > 0,
            onError: () => {
                setError((error) => ({ ...error, jobType: true }))
            }
        },
        remote: {
            message: "Remote is required",
            isValid: true,
            onError: () => {
                setError((error) => ({ ...error, remote: true }))
            }
        },
        location: {
            message: "Location is required",
            isValid: formData.location.length > 0,
            onError: () => {
                setError((error) => ({ ...error, location: true }))
            }
        },
        description: {
            message: "Description is required",
            isValid: formData.description.length > 0,
            onError: () => {
                setError((error) => ({ ...error, description: true }))
            }
        },
        about: {
            message: "About is required",
            isValid: formData.about.length > 0,
            onError: () => {
                setError((error) => ({ ...error, about: true }))
            }
        },
        information: {
            message: "Information is required",
            isValid: formData.information.length > 0,
            onError: () => {
                setError((error) => ({ ...error, information: true }))
            }
        },
       
    }

    return (
       <div className={styles.container}>
<div className={styles.right}>
    <div className={styles.inputt}>
<>
<h1>Create an account</h1>
       <span>Your personal job finder is here</span>
        
        <Form error={error} formFields={formFields} onSubmit={onSubmit} btn={btn} errorMessages={errorMessages} /></>


        
        </div>
</div>
<div className={styles.left}>
   <p className={styles.heading}>Recruiter add job details here</p>
  <img className={styles.img} src={pageimg} alt=""  />

</div>

       </div>
    )
}
