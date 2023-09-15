import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () =>{
        try {
            if (password !== confirmPassword){
                setError('Password does not match')
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/login");
        } catch(e){
            setError(e.message);
        }
    }
    return (
        <>
            <h3 class = "title">Create Account</h3>
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
            <input 
                type="password"
                placeholder="Re-enter your password"
                value = {confirmPassword}
                onChange={e=>setConfirmPassword(e.target.value)} />
            <button onClick={createAccount}>Create Account</button>
            <Link to="/login"> Already have an account? Log in here</Link>
        </>
    )
}
export default Signup;