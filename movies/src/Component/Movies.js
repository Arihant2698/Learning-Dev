import React, { Component } from "react";
import { getMovies } from "./getMovies";
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      currSearchText: "",
      currPage: 1,
      limit: 4,
    };
  }
  handleDelete = (id) => {
    let nta = this.state.movies.filter((movie) => {
      return movie._id != id;
    });
    this.setState({
      movies: nta,
    });
  };
  handleChange = (e) => {
    this.setState({ currSearchText: e.target.value });
  };
  sortByStock = (e) => {
    let className = e.target.className;
    let arrSort = [];
    if (className == "fa-solid fa-sort-up") {
      //sort() will sort help for sorting
      //    movie a- movie b will sort in asc order
      arrSort = this.state.movies.sort((movieA, movieB) => {
        return movieA.numberInStock - movieB.numberInStock;
      });
    } else {
      //Movie b- movie a will sort in desc
      arrSort = this.state.movies.sort((movieA, movieB) => {
        return movieB.numberInStock - movieA.numberInStock;
      });
    }
    this.setState({
      movies: arrSort,
    });
  };
  sortByRatings = (e) => {
    let className = e.target.className;
    let arrRate = [];
    if (className == "fa-solid fa-sort-up") {
      arrRate = this.state.movies.sort((movieA, movieB) => {
        return movieA.dailyRentalRate - movieB.dailyRentalRate;
      });
    } else {
      arrRate = this.state.movies.sort((movieA, movieB) => {
        return movieB.dailyRentalRate - movieA.dailyRentalRate;
      });
    }
    this.setState({
      moveies: arrRate,
    });
  };
  handleLimit = (e) => {
    let newlimit = Number(e.target.value);
    this.setState({ limit: newlimit });
  };
  changePage=(page)=>{
    this.setState({
        currPage:page
    })
  }
  render() {
    let { movies, currSearchText, currPage, limit } = this.state;
    let filterMovies = [];
    if (currSearchText != "") {
      filterMovies = movies.filter((tit) => {
        let title = tit.title.trim().toLowerCase();
        return title.includes(currSearchText.toLowerCase());
      });
    } else {
      filterMovies = movies;
    }
    let TotPage = Math.ceil(filterMovies.length/limit);
    let Pagearr=[];
    for(let i=0;i<TotPage;i++){
        Pagearr.push(i+1);
    }
    let si = (currPage - 1) * limit;
    let ei = si + limit;
    filterMovies = filterMovies.slice(si, ei);

    return (
      <div className="row">
        <div className="col-3">
          <h1>Hello</h1>
        </div>
        <div className="col-9">
          <input
            className="input_box"
            placeholder="Enter Movie Name"
            type="text"
            onChange={this.handleChange}
            value={this.state.currSearchText}
          ></input>
          {/*
     start index =(pgno-1)*limit 
     endindex=si+limit-1+1(slice need +1 index so)
     endindex=si+limit;
      */}
          <input
            type="number"
            value={
              this.state.limit > filterMovies.length
                ? filterMovies.length
                : this.state.limit
            }
            onChange={this.handleLimit}
            min="1"
            max={movies.length}
          ></input>
          <table className="table table-dark table-striped table_position">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">
                  <i
                    className="fa-solid fa-sort-up"
                    onClick={this.sortByStock}
                  ></i>
                  Stock
                  <i
                    className="fa-solid fa-sort-down"
                    onClick={this.sortByStock}
                  ></i>
                </th>
                <th scope="col">
                  <i
                    className="fa-solid fa-sort-up"
                    onClick={this.sortByRatings}
                  ></i>
                  Rate
                  <i
                    className="fa-solid fa-sort-down"
                    onClick={this.sortByRatings}
                  ></i>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterMovies.map((movie) => (
                <tr scope="row" key={movies._id}>
                  <td></td>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="...">
            <ul class="pagination pagination_lg">
                {/* <a class="page-link" href="#">
              <li class="page-item">
                  1
                </a>
              </li>
              <li class="page-item active" aria-current="page">
                <span class="page-link">2</span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a> 
                </li>
                */}
                {
                    Pagearr.map((page)=>{
                        let classCustName = page === currPage?"page-item active":"page-item";
                        return(
                        <li class={classCustName} onClick={()=>this.changePage(page)} key={page} aria-current="page">,
                        <span class="page-link">{page}</span>; 
                        </li>
                        )                  
                })
                }
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
