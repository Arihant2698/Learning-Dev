import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : getMovies()
        }
    }
    render() {
        let {movies} = this.state;
    return (
      <div>
        <h2>dddddddd</h2>

<h1>OKK</h1>

     
      </div>
    )
  }
}
