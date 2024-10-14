import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate =useNavigate()

    const isLogin=localStorage.getItem("token")
    const logout =()=>{
        localStorage.removeItem("token");
        alert("you are logged out")
        navigate("/login")
        
    }
    return(
       <nav style={
        {display:"flex",
            zIndex:100,
        }
       }>
        Navbar
        {isLogin ?<><p>&nbsp; Hello Recruiter	</p> <button onClick={logout}> Logout</button> </> : <p> &nbsp; not logged in</p>}

       </nav>
    )
}