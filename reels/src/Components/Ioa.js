// import React,{useState,useEffect} from 'react';
// import vid from './vid.mp4';
// import vid1 from './vid1.mp4';
// import vid2 from './vid2.mp4';
// import vid3 from './vid3.mp4';
// import VideoIo from './VideoIo';
// export default function Ioa() {
//     const[sources,setSources]=useState([{url:vid1},{url:vid2},{url:vid3},{url:vid}])
   
//     const callback = entries=>{
//         entries.forEach(element => {
//             console.log(element);
//             let el = element.target.childNodes[0];
//             el.play().then(()=>{
//                 //if this video is not in viewport then pause it
//                 if(!el.paused && !element.isIntersecting)
//                 {
//                     el.pause();                
//                 }
//             })

//         });
//     }

//     const observer = new IntersectionObserver(callback,{
//         threshold:0.9
//     })
    
// useEffect(()=>{
//     console.log("useeffect");
//     let elements= document.querySelectorAll(".videos");
//     elements.forEach(e1=>{
//         observer.observe(e1);
//     })

// },[])
//     return (    
//     <div className='video-container'>
//         <div className='videos'>
//             <VideoIo source={sources[0].url}/>
//         </div>
//         <div className='videos'>
//             <VideoIo source={sources[1].url}/>
//         </div>
//         <div className='videos'>
//             <VideoIo source={sources[2].url}/>
//         </div>
//         <div className='videos'>
//             <VideoIo source={sources[3].url}/>
//         </div> 
//     </div>
//   )
// }