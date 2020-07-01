import React, { Component } from "react";
import axios from "axios";
import config from "../api/cofig";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieLists: [],
    };
  }
  componentDidMount() {
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((res) => {
      const movieData = res.data.results;
      this.setState({
        movieLists: movieData,
      });
    });
  }
  render() {
    console.log(this.state.movieLists);
    const imageUrl = "http://image.tmdb.org/t/p/w300";
    const movieList = this.state.movieLists.map((movie, i) => {
      return (
        <div className="col s12 m6 l4 xl3 movie-list" key={i}>
          <div className="img">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`${imageUrl}${movie.poster_path}`}
                alt={`${imageUrl}${movie.poster_path}`}
              />
            </Link>
          </div>
        </div>
      );
    });
    return <div className="row">{movieList}</div>;
  }
}
