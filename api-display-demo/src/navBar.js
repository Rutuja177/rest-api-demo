import { Link, useNavigate, useLocation } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hook/useUser";

const NavBar = () =>{
    const {user} = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const isNotLoginPage = location.pathname !== '/login';


    const handleLogout = () =>{
        signOut(getAuth())
        navigate('/');
    }
    return (
        <>
        <div className="navBar"> 
            {user && isNotLoginPage ?
            <button 
            className= "logoutBtn" 
            onClick={()=>{handleLogout()}}>Logout</button>
            :null
            }
        </div>
        
        </>
    )
}
export default NavBar;