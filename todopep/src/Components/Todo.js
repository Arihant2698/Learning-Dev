import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
        this.state ={
            tasks : [{id:1,name:"work"},{id:2,name:"work"},{id:3,name:"work"}], //array of objects with id and name 
           }
    }
    handleclick=(task)=>{
        let nta = [...this.state.tasks,{id:this.state.tasks.length+1,name:task}];
           this.setState({
            tasks:nta,
            
        })
        console.log(this.state.currtask);
            
    }        
    handledelete = (id)=>{
        let nta =  this.state.tasks.filter(obj=>{
            return obj.id!==id;
        }) 
        this.setState({
                tasks:nta 
            })
    }

    render() {
       return (
       <div>
        <Addfun handleclick={this.handleclick}/>
        <ListCom tasks ={this.state.tasks} handledelete = {this.handledelete}/>
        </div>
    )
  }
}

 class Addfun extends Component {
    constructor(props){
        super(props);
        this.state ={
                    currtask :''
        }
    }
    handlechange=(e)=>{
        let cval =e.target.value 
        this.setState({currtask:cval})
        console.log(this.state.currtask)
        }

  render() {
    return ( 
    <div className='input-container'>
    <input type='text' value={this.state.currtask} onChange={this.handlechange}></input>
    <button onClick={()=>{
        this.props.handleclick(this.state.currtask);
        // If we comment the below line then the blank box will not be empty after clicking on add button
        this.setState({currtask:''})    
        }}>Add</button>

</div>
    )
  }
}

 class ListCom extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className='list-tasks'>
        <ul> {
             this.props.tasks.map((task)=>(
                 <li key={task.id}>
                 <h1> {task.name}</h1>
{/*  in delete we can also write bind in place of arrow fun like function(){this.handleDelete(task.id)}.bind(this)}  */}
                 <button onClick={ ()=>this.props.handledelete(task.id)}  >Delete</button>
                 </li>

             ))
         }
         </ul>
     </div>
)
  }
}

