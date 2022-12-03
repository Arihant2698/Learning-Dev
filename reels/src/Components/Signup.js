import React,{useState,useEffect,useContext} from 'react';
import {AuthContext} from '../Context/AuthProvider';
export default function Signup() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [error,setError]= useState('');
  const [loading,setLoading]=useState(false);
  const {signup} = useContext(AuthContext);
    const handleSignUp=async (e)=>{
        e.preventDefault();
        setLoading(true);
        let res =await signup(email,password);
        let uid = res.user.uid;
        setLoading(false);
    }
    return (
    <div>
        <form onSubmit={handleSignUp} >
            <div>
                <label htmlFor=''>UserName</label>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor=''>Email</label>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor=''>Password</label>
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type='submit' disabled={loading}>Login</button>
        </form>

    </div>
  )
}
