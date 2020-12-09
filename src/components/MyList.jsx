import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Movie from "./Movie";
import keyApi from "../const/apiKey";
import { FixFooter, Container, H1, Div } from "../style/MyListCss";

class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoFavorites: [],
      infoAlreadySeen: [],
    };
  }

  componentDidMount() {
    this.getAllFavorites();
    this.getAllAlreadySeen();
  }

  componentDidUpdate(prevProps) {
    const prevFavorites = prevProps.favorites;
    const prevAlreadySeen = prevProps.alreadySeen;
    const { favorites, alreadySeen } = this.props;

    if (JSON.stringify(prevFavorites) !== JSON.stringify(favorites)) {
      this.getAllFavorites();
    }

    if (JSON.stringify(prevAlreadySeen) !== JSON.stringify(alreadySeen)) {
      this.getAllAlreadySeen();
    }
  }

  getAllFavorites = () => {
    const { favorites } = this.props;
    favorites.forEach((id) => this.getInfosMovieFavorite(id));
  };

  getInfosMovieFavorite = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`;
    const { infoFavorites } = this.state;
    axios
      .get(url)
      .then((response) => response.data)
      .then((informationsFilm) => {
        infoFavorites.push(informationsFilm);
        this.setState({ infoFavorites });
      });
  };

  getAllAlreadySeen = () => {
    const { alreadySeen } = this.props;
    alreadySeen.forEach((id) => this.getInfosAlreadySeen(id));
  };

  getInfosAlreadySeen = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`;
    const { infoAlreadySeen } = this.state;
    axios
      .get(url)
      .then((response) => response.data)
      .then((informationsFilm) => {
        infoAlreadySeen.push(informationsFilm);
        this.setState({ infoAlreadySeen });
      });
  };

  render() {
    const { infoFavorites, infoAlreadySeen } = this.state;
    return (
      <>
        <Container>
          <H1>Favorite List</H1>
          <Div>
            {infoFavorites.map((essai) => (
              <Movie
                posterPath={essai.poster_path}
                title={essai.original_title}
                id={essai.id}
              />
            ))}
          </Div>
          <H1>Already seen</H1>
          <Div>
            {infoAlreadySeen.map((essai2) => (
              <Movie
                posterPath={essai2.poster_path}
                title={essai2.original_title}
                id={essai2.id}
              />
            ))}
          </Div>
        </Container>
        <FixFooter>
          <Footer />
        </FixFooter>
      </>
    );
  }
}

MyList.propTypes = {
  alreadySeen: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyList;
