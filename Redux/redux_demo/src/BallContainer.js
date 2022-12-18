import React from 'react'
import {buyBall} from './Redux/balls/BallActions'
import {connect} from 'react-redux'
 function BallContainer(props) {
    console.log(props);
  return (
    <div>
        <h1>Number of Balls-{props.numofballs}</h1>
        <button onClick={props.buyBall}>Buy Balls</button>
    </div>
  )
}

const mapStatetoProps= state=>{
    return {
        numofballs:state.numofBalls
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        buyBall:()=>dispatch(buyBall())
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(BallContainer)