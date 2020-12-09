import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  ContainerGlobal,
  DetailsMovies,
  LeftDetails,
  Synopsis,
  DetailsRight,
  LiDetails,
  Infos,
  Image,
  DetailImage,
  H1,
  H3,
} from "../style/FicheFilmCss";
import { IMAGE_BASE_URL } from "../const/Const";
import Trailer from "./Trailer";
import keyApi from "../const/apiKey";
import Recommendations from "./Recommendations";

class FicheFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      crew: [],
      movie: {
        adult: null,
        poster_path: "",
        genres: [],
        original_language: "",
        title: "",
        release_date: "",
        runtime: 0,
        vote_average: 0,
        overview: "",
      },
    };
  }

  componentDidMount() {
    this.getCredits();
    this.getMovie();
  }

  componentDidUpdate(prevProps) {
    const prevMovie = prevProps.match.params.id;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (prevMovie !== id) {
      this.getCredits();
      this.getMovie();
    }
  }

  getMovie = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((movieObject) => this.setState({ movie: movieObject }));
  };

  getCredits = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          cast: data.cast,
          crew: data.crew,
        })
      );
  };

  render() {
    const { cast, crew, movie } = this.state;
    const {
      movie: { genres },
    } = this.state;
    const date = new Date(movie.release_date);
    return (
      <ContainerGlobal>
        <Trailer id={movie.id} />
        <DetailsMovies>
          <LeftDetails>
            <H1>{movie.title}</H1>
            <h4>
              {date.getFullYear()} -{movie.runtime}min -{movie.vote_average}/10
              {movie.adult ? "(Adult)" : ""}
            </h4>
            <H3>Synopsis:</H3>
            <Synopsis>{movie.overview}</Synopsis>
            <H3>Recommendations:</H3>
            <Recommendations id={movie.id} />
          </LeftDetails>

          <DetailImage>
            <Image
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
              width="300px"
            />
            <Infos>
              <DetailsRight>Genre</DetailsRight>
              {genres.map((genre) => (
                <LiDetails key={genre.id}>{genre.name}</LiDetails>
              ))}
              <DetailsRight>Casting</DetailsRight>
              {cast
                .filter((acteur) => acteur.order < 3)
                .map((item) => (
                  <LiDetails key={item.id}>{item.name}</LiDetails>
                ))}
              <DetailsRight>Director</DetailsRight>
              {crew
                .filter((realisateur) => realisateur.job === "Director")
                .map((item) => (
                  <LiDetails key={item.id}>{item.name}</LiDetails>
                ))}
              <DetailsRight>Original language</DetailsRight>
              <LiDetails>{movie.original_language}</LiDetails>
            </Infos>
          </DetailImage>
        </DetailsMovies>
      </ContainerGlobal>
    );
  }
}

FicheFilm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FicheFilm;
