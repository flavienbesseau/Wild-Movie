import React from "react";
import PropTypes from "prop-types";
import { Container, Categories } from "../style/GenresListCSS";

const GenreList = ({ genres, handleButtonClicked, genresToFilter }) => {
  return (
    <Container>
      {genres.map((genre) => (
        <Categories
          key={genre.id}
          value={genre.id}
          onClick={handleButtonClicked}
          className={
            genresToFilter.includes(genre.id) ? "active" : "not-active"
          }
        >
          {genre.name}
        </Categories>
      ))}
    </Container>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleButtonClicked: PropTypes.func.isRequired,
  genresToFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenreList;
