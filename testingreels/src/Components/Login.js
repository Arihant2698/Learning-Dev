import React, { useContext, useState } from 'react'
import AuthContext from '../Context/AuthProvider'
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const {login} = useContext(AuthContext);
    const handleLogin=async(e)=>{
        e.preventDefault()
        try {

            setLoading(true);
            await login(email,password)
            setLoading(false);
        } catch (error) {
            setError(error);
            setTimeout(setError(""),5000);
            setLoading(false);
        }
    }
    
    
    
    
    return (
        <div>
            <form onSubmit={handleLogin} >
                <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>LogIn</button>
            </form>
        </div>
    )
}
