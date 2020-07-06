import React, { Component } from "react";
import axios from "axios";
import config from "../../api/cofig";
import { Link } from "react-router-dom";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.api_key}`;
    axios.get(singleMovieUrl).then((res) => {
      this.setState({
        movie: res.data,
      });
    });
  }
  render() {
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const imageUrl2 = `http://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
    return (
      <div className="movie">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="row">
          <div className="col s12 m6 l6 xl6">
            <img src={imageUrl} alt={imageUrl} />
            <h2>Openinig Date</h2>
            <div className="release_date">
              <p>{movie.release_date}</p>
            </div>
          </div>
          <div className="col s12 m6 l6 xl6">
            <h2>Tag line </h2>
            <div className="tagline">
              <p>{movie.tagline}</p>
            </div>
            <h2>Overview</h2>
            <div className="overview">
              <p>{movie.overview}</p>
            </div>
            <div className="homepage">
              <p className="light-blue-text text-lighten-2">
                <a href={movie.homepage}>{movie.homepage}</a>
              </p>
            </div>
            <div>
              <p>
                <img src={imageUrl2} alt={imageUrl} />
              </p>
            </div>
          </div>
        </div>
        <div className="toHome">
          <h2>
            <Link to="/">
              <button className="btn blue darken-2">Home</button>
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default Movie;
