import React,{useState,useEffect,useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider';
//useHistory to redirect the page if the user after login or already login to feed page 
import { useHistory } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true);
    const {login,currentUser} =useContext(AuthContext);
    const history = useHistory();
     const handleSubmit = async(e)=>{
          console.log('hi');
        e.preventDefault()
        try {
          console.log('Logging in user')
          setLoading(true)
          await login(email, password)
          setLoading(false)
          history.push('/');
        } 
        catch {
          setError("Failed to log in")
          setTimeout(()=>setError(''),2000)
          setLoading(false)
        }
      }
      //If a user is already login then we have to redirect it to feed page 
      useEffect(()=>{
        if(currentUser){
            history.push('/')
        }
        setLoading(false);
      },[])

      //here added a conditon that if a user is login then don't render it directly transfer to useeffect so user cannot see the login page image
      //not req for mini project but added it will be visible when project is large u can check by removing below condition in signup page
    return (
        !loading?
        <div>
              <form onSubmit={handleSubmit} >
             <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>Login</button>
                {//Show error if user has wriiten wrong creds
                error?alert(error):<></>}
                </form>

        </div>:<></>
    )
}