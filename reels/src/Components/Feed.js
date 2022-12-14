import React,{useState,useEffect,useContext} from 'react'
import Header from './Header';
import { AuthContext } from '../Context/AuthProvider'
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadFile from './UploadFile';
import './Feed.css'
import { database } from '../firebase.js';
import Posts from './Posts'
export default function Feed() {
    const {currentUser} =useContext(AuthContext);
    const [userData,setUserData] = useState(null);
    useEffect(()=>{
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc)=>{
            // console.log(doc.data());
            setUserData(doc.data())
        })
    },[currentUser])
    return (
        <>
        { userData==null ? <CircularProgress />:<>
        <Header userData={userData} />
        <div style={{height:'9.5vh'}}/>
        <div className='feed-container'>
            <div className='center'>
                <UploadFile userData={userData}/>
                <Posts userData={userData}/>
            </div>
        </div>

        </>
        }
        </>
    )
}