import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password); 
            navigate('/display');
        } catch(e){
            setError(e.message);
        }
    }
    return (
        <>
            <h3 class = "title">Log In</h3>
            {error && <p>{error}</p>}
            <input 
                placeholder="Your Email .."
                value = {email}
                onChange={e=> setEmail(e.target.value)} />
            <input 
                type="password"
                placeholder="Your password"
                value = {password}
                onChange={e=>setPassword(e.target.value)} />
            <button onClick={login}>Log In</button>
            <Link to="/signup"> Don't have an account? create here.</Link>
        </>
    )
}
export default Login;