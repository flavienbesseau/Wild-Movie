import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import RecommendationsStyles from "../style/RecommendationsStyles";
import Movie from "./Movie";
import keyApi from "../const/apiKey";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
    };
  }

  componentDidMount() {
    this.getRecommendations();
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.id;
    const { id } = this.props;

    if (prevId !== id) {
      this.getRecommendations();
    }
  }

  getRecommendations = () => {
    const { id } = this.props;
    const firstPartLink = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=`;
    const url = `${firstPartLink}${keyApi}&language=en-US&page=1`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => response.results)
      .then((recommendationsArray) =>
        this.setState({ recommendations: recommendationsArray })
      )
      .catch(() => this.setState({ recommendations: [] }));
  };

  render() {
    const { recommendations } = this.state;
    return (
      <RecommendationsStyles>
        {recommendations.length !== 0 ? (
          recommendations
            .filter((reco, index) => index < 8)
            .map((item) => (
              <Movie
                posterPath={item.poster_path}
                title={item.title}
                id={item.id}
                key={item.id}
              />
            ))
        ) : (
          <p>No recommendations available</p>
        )}
      </RecommendationsStyles>
    );
  }
}

Recommendations.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Recommendations;
