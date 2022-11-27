import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : getMovies(),
            currSearchText:''
        }
    }
    handleDelete=(id)=>{
            let nta=this.state.movies.filter((movie)=>{
                return movie._id!=id;
            })
            this.setState( {
                movies:nta
            })
    }
    handleChange=(e)=>{
            this.setState({currSearchText:e.target.value})
    }

    render() {
        let {movies,currSearchText} = this.state;
        let filtertitle=[];
        if(currSearchText !=''){
                 filtertitle= movies.filter((tit)=>{
                    let title = tit.title.trim().toLowerCase();
                    return title.includes(currSearchText.toLowerCase());

                 })
        }else{
                filtertitle=movies;
        }

    return (
      <div className='row'>
        <div className='col-3'>
            <h1>Hello</h1>
        </div>
      <div className='col-9'>
        <input type="text" onChange={this.handleChange}  value={this.state.currSearchText}></input>
      
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
  {
        filtertitle.map(movie=>(
     <tr scope='row' key={movies._id}>
            <td></td>
           <td>{movie.title}</td>
           <td>{movie.genre.name}</td>
           <td>{movie.numberInStock}</td>
           <td>{movie.dailyRentalRate}</td>
           <td><button type='button' className='btn btn-danger' onClick={()=>this.handleDelete(movie._id)}>Delete</button></td>
        </tr>
))
        }

   </tbody>
</table>
        </div>
      </div>
    )
  }
}
