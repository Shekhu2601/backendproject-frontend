import Form from "../../componets/form";
import { useState } from "react";
import pageimg from '../ragister/ragisterpage.png'
import { login } from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import styles from './login.module.css'

export default function Login() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    if (token) {
      //  navigate("/");
    }
    const [formData, setFormData] = useState({
        
        email: "",
        
        password: "",
        
    });
    const [btn ,setBtn]=useState("Sign in")
    const [error, setError] = useState({
        
        email: false,
        
        password: false,
        
    });
    const formFields = [
      
           
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
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            value: formData.password,
            onChange: (e) => {
                setFormData({ ...formData, password: e.target.value })
            }
        }, 
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
            const res = await login(formData);
           try{
            if (res.status === 200) {
              alert("Login successfully");
              const token =res.data.token;
              localStorage.setItem("token",token)
              navigate("/");
          }
          else {
              alert("Something went wrong");
          }
           }
           catch(e) {
            if (e.res.status===400) {
              alert("Invalid email or password");
          }
           }
            setFormData( "")
        }
    }
    const errorMessages = {
       
        email: {
            message: "Email is required",
            isValid: formData.email.length > 0,
            onError: () => {
                setError((error) => ({ ...error, email: true }))
            }
        },
      
        password: {
            message: "Password is required",
            isValid: formData.password.length > 0,
            onError: () => {
                setError((error) => ({ ...error, password: true }))
            }
        },
        
        
    }

    return (
       <div className={styles.container}>
<div className={styles.right}>
    <div className={styles.inputt}>
<>
<h1>Already have an account?</h1>
       <span>Your personal job finder is here</span>
        
        <Form error={error} formFields={formFields} onSubmit={onSubmit} btn={btn} errorMessages={errorMessages} /></>


        <h4>Don’t have an account? <a href=""> Sign Up</a> </h4>
        </div>
</div>
<div className={styles.left}>
   <p className={styles.heading}>Your Personal Job Finder</p>
  <img className={styles.img} src={pageimg} alt=""  />

</div>

       </div>
    )
}