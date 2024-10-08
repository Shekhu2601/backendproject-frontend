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
        email: "",
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
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            value: formData.email,
            onChange: (e) => {
                setFormData({ ...formData, email: e.target.value })
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
        email: {
            message: "Email is required",
            isValid: formData.email.length > 0,
            onError: () => {
                setError((error) => ({ ...error, email: true }))
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
