import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {v4 as uuidv4} from 'uuid';
import LinearProgress from '@material-ui/core/LinearProgress';
import {storage,database} from '../firebase.js'
const useStyles = makeStyles((theme) => ({

  }));

export default function UploadFile(props) {
    const classes=useStyles();
    const [loading,setLoading]= useState(false);
    const [error,setError] = useState(null);
    const types =['video/mp4','video/webm','video/ogg'];
    
    const onChange=(e)=>{
        const file = e?.target?.files[0];
        console.log(file);
        if(!file){
          
          setError("File not selected");
          console.log(error);
          setTimeout(setError(""),5000);
          return
         }        
         if(types.indexOf(file.type)==-1){
           setError("File format is not proper");
           console.log(error);
           setTimeout(setError(""),5000);
           return
         }
        if(file.size/(1024*1024)>100){
          setError("File size is greater than 100 mb");
          console.log(error);
          setTimeout(setError(""),5000);
          return
       }
       const id= uuidv4();  //Generate random uid 
        const uploadTask = storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);

        //functions
        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');         
        }
        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false)
        }
        async function fn3(){
          setLoading(true);
          uploadTask.snapshot.ref.getDownloadURL().then(url=>{
              let obj  ={
                  comments:[],
                  likes:[],
                  pId:id,
                  pUrl:url,
                  uName:props?.userData?.username,
                  uProfile:props?.userData?.profileUrl,
                  userId:props?.userData?.userId,
                  createdAt:database.getCurrentTimeStamp()
              }
              console.log(obj);
              console.log(props.userData);
              //Added  obj in posts collection
              database.posts.add(obj).then(async docRef=>{
                  console.log(docRef);

                  //Updating the post id in users collection
                  let res = await database.users.doc(props.userData.userId).update({
                      postIds:[...props.userData.postIds,docRef.id]
                  })
              }).then(()=>{
                  setLoading(false)
              }).catch(e=>{
                  setError(e);
                  setTimeout(()=>{
                      setError('')
                  },2000);
                  setLoading(false)
              })
          })
        }
    }


    return (
        <>
        {
            error!=null? <Alert severity="error">{error}</Alert>:<>
            <input 
            color='primary'
            type='file'
            onChange={onChange}
            id='icon-button-file'
            style={{display:'none'}}
            />
            <label htmlFor='icon-button-file'>
            <Button disabled={loading} variant="outlined" component='span' className={classes.button} 
            size='medium' color="secondary">
                Secondary
            </Button>

            </label>
            {loading?<LinearProgress color='secondary' style={{marginTop:'6%'}} />:<></>}
            </>

        }
        </>
  )
}
