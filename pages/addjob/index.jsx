import Form from "../../componets/form";
import { useState } from "react";
import styles from "./addJob.module.css"
import pageimg from './WallpaperDog.png'
import "./style.css"


import { ragister } from "../../services/Auth";
import { useNavigate } from "react-router-dom";
export default function addJob() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        CompanyName: "",
        AddlogoURL: "",
        Jobposition:"",
        Monthlysalary:"",
        JobType:[  { value: 1, show: '3' },
            { value: 2, show: '6' },
            { value: 3, show: '9' },

        ],
        mobile : "",
        password: "",
        confirmPassword: "",
       
    });
    const [btn ,setBtn]=useState("Create Account")
    const [error, setError] = useState({
        CompanyName: false,
        email: false,
        mobile:false,
        password: false,
        confirmPassword: false,
        
    });
    const formFields = [
        {
            CompanyName: "CompanyName",
            type: "text",
            className :"inputs",
            label:"Company Name",
            
            placeholder: "Enter your name",
            value: formData.CompanyName,
            onChange: (e) => {
                setFormData({ ...formData, CompanyName: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
            Jobposition: "Job position",
            type: "text",
            placeholder: "Enter job position",
            label:"Job position ",
            className:"inputs",
            value: formData.Jobposition,
            onChange: (e) => {
                setFormData({ ...formData, Jobposition: e.target.value })
            }
        },
        {
            Monthlysalary: "Monthly salary",
            type: "text",
            placeholder: "Enter Amount in rupees",
            label:"Monthly salary",
            className:"inputs",
            value: formData.Monthlysalary,
            onChange: (e) => {
                setFormData({ ...formData, Monthlysalary: e.target.value })
            }
        },
        {
            JobType: "Job Type",
            type: "select",
            placeholder: "Enter the link",
            label:"Job Type ",
            className:"inputs",
            value: formData.JobType,
            onChange: (e) => {
                setFormData({ ...formData, JobType: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
            AddlogoURL: "Add logo URL",
            type: "text",
            placeholder: "Enter the link",
            label:"Add logo URL ",
            className:"inputs",
            value: formData.AddlogoURL,
            onChange: (e) => {
                setFormData({ ...formData, AddlogoURL: e.target.value })
            }
        },
        {
          name: "mobile",
          type: "text",
          placeholder: "Enter your Mobile",
          value: formData.mobile,
          onChange: (e) => {
              setFormData({ ...formData, mobile: e.target.value })
          }
      },
        {
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            value: formData.password,
            onChange: (e) => {
                setFormData({ ...formData, password: e.target.value })
            }
        }, {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm your password",
            value: formData.confirmPassword,
            onChange: (e) => {
                setFormData({ ...formData, confirmPassword: e.target.value })
            }
        }
        ,
    ]
    const onSubmit = async (e) => {
        let isError = false;
        e.preventDefault();
        Object.keys(errorMessages).forEach(key => {
            if (!errorMessages[key].isValid) {
                isError = true;
                errorMessages[key].onError();
            }
        })
        if (!isError) {
            const res = await ragister(formData);
            if (res.status === 200) {
                alert("Registered successfully");
                navigate("/login");
            }
            else {
                alert("Something went wrong");
            }
        }
    }
    const errorMessages = {
        CompanyName: {
            message: "CompanyName is required",
            isValid: formData.CompanyName.length > 0,
            onError: () => {
                setError((error) => ({ ...error, CompanyName: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        Jobposition: {
            message: "Job position is required",
            isValid: formData.Jobposition.length > 0,
            onError: () => {
                setError((error) => ({ ...error, Jobposition: true }))
            }
        },
        Monthlysalary: {
            message: "Monthly salary is required",
            isValid: formData.Monthlysalary.length > 0,
            onError: () => {
                setError((error) => ({ ...error, Monthlysalary: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        AddlogoURL: {
            message: "Add logo URL is required",
            isValid: formData.AddlogoURL.length > 0,
            onError: () => {
                setError((error) => ({ ...error, AddlogoURL: true }))
            }
        },
        mobile: {
          message: "Mobile Number is required",
          isValid: formData.mobile.length > 0,
          onError: () => {
              setError((error) => ({ ...error, mobile: true }))
          }
      },
        password: {
            message: "Password is required",
            isValid: formData.password.length > 0,
            onError: () => {
                setError((error) => ({ ...error, password: true }))
            }
        },
        confirmPassword: {
            message: "Passwords do not match",
            isValid: formData.confirmPassword === formData.password,
            onError: () => {
                setError((error) => ({ ...error, confirmPassword: true }))
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


        <h4>Already have an account?  <a href=""> Sign In</a> </h4>
        </div>
</div>
<div className={styles.left}>
   <p className={styles.heading}>Recruiter add job details here</p>
  <img className={styles.img} src={pageimg} alt=""  />

</div>

       </div>
    )
}
