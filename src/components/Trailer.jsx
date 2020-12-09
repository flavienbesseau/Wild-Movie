import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import TrailerStyle from "../style/TrailerCss";
import YOUTUBE_URL from "../const/ConstYoutube";
import keyApi from "../const/apiKey";

class Trailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandeAnnonce: undefined,
    };
  }

  componentDidMount() {
    this.getBandeAnnonce();
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.id;
    const { id } = this.props;

    if (prevId !== id) {
      this.getBandeAnnonce();
    }
  }

  getBandeAnnonce = () => {
    // Ceci est la clé de l'API
    const { id } = this.props;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${keyApi}&language=en-US`
      )
      // je reçois les données qui sont dans un tableau results et je cible la key
      .then((response) => response.data.results[0].key)
      .then((trailer) => this.setState({ bandeAnnonce: trailer }))
      .catch(() => this.setState({ bandeAnnonce: undefined }));
  };

  render() {
    const { bandeAnnonce } = this.state;
    return (
      <TrailerStyle>
        {bandeAnnonce ? (
          <ReactPlayer
            url={`${YOUTUBE_URL + bandeAnnonce}`}
            width="100%"
            height="600px"
          />
        ) : (
          <p>No Trailer Available</p>
        )}
      </TrailerStyle>
    );
  }
}

Trailer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Trailer;
