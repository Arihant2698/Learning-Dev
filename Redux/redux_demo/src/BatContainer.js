import React,{useState} from 'react'
import { connect, Connect } from 'react-redux';
import { buyBat } from './Redux/bats/BatActions';
export default function BatContainer(props) {
  const [number,setnumber]=useState(0);
  
  
    return (
    <div>
        <h2>Number of Bats: {props.numberofBats}</h2>
        <input type='number' value={number} onChange={e=>setnumber(e.target.value)}/>
        <button onClick={()=>props.buyBat(number)}>Buy {number} Bat </button>
    </div>
  )
}


const mapStatetoProps=state=>{
    return {
        numberofBats:state.bat.numberofBats
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyBat:(number)=>dispatch(buyBat(number))
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(BatContainer)