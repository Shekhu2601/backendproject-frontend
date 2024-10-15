import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"

export default function Navbar(){
    const navigate =useNavigate()

    const isLogin=localStorage.getItem("token")
    const logout =()=>{
        localStorage.removeItem("token");
        alert("you are logged out")
        navigate("/login")
        
    }
    const login =()=>{
        navigate("/login")
    }
    const register =()=>{
        navigate("/ragister")
    }
    return(
       <nav>
       <p className={styles.nav}>Jobfinder</p>
        {isLogin ?<><p>&nbsp; 	</p> <button className={styles.btn} onClick={logout}> Logout</button> </> : <button className={styles.btn} onClick={login}> Login</button> }
        {isLogin ?<><p>&nbsp; 	</p> <button className={styles.btn} onClick={logout}> Logout</button> </> : <button className={styles.btnre} onClick={register}> Register</button> }

       </nav>
    )
}