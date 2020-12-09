import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import keyApi from "../const/apiKey";
import { IMAGE_BASE_URL } from "../const/Const";
import {
  MainContainer,
  RightContainer,
  P,
  Button,
  Img,
  Para,
  Div,
} from "../style/RandomCss";
import Footer from "./Footer";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      posterPath: "",
      id: null,
      overview: "",
    };
  }

  componentDidMount() {
    this.getMovieRandom();
  }

  getMovieRandom = () => {
    const getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    const random = getRandomArbitrary(100, 50000);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${random}?api_key=${keyApi}&language=en-US`
      )
      .then((response) => response.data)
      .then((movie) => {
        this.setState({
          title: movie.title,
          posterPath: movie.poster_path,
          id: movie.id,
          overview: movie.overview,
        });
      })
      .catch(() => this.getMovieRandom());
  };

  handleOnClick = () => {
    this.getMovieRandom();
  };

  render() {
    const { title, posterPath, id, overview } = this.state;
    return (
      <>
        <MainContainer>
          <Div>
            {posterPath ? (
              <Img
                src={IMAGE_BASE_URL + posterPath}
                alt={title}
                width="300px"
                height="450px"
              />
            ) : (
              <Img
                src="https://via.placeholder.com/300x450"
                alt="element non trouvé"
                width="300px"
                height="450px"
              />
            )}
            <Button onClick={this.handleOnClick} type="button">
              Spin
            </Button>
          </Div>
          <RightContainer>
            <div>
              <h1>{title}</h1>
              <P>{overview}</P>
              <Link to={`/movie/${id}`}>
                <Para>Click here for more informations</Para>
              </Link>
            </div>
          </RightContainer>
        </MainContainer>
        <Footer />
      </>
    );
  }
}

export default Random;
