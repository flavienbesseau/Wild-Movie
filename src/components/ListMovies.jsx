import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ButtonPlus,
  ButtonLess,
  Arrow,
} from "../style/ListMovieCss";
import Movie from "./Movie";

const ListMovies = ({
  movies,
  isFavorite,
  addToFavorite,
  IncrementPageExploreMovies,
  pageMovie,
  DecrementPageExploreMovies,
}) => {
  return pageMovie === 1 ? (
    <Container>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          id={movie.id}
          isFavorite={isFavorite}
          addToFavorite={addToFavorite}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageExploreMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  ) : (
    <Container>
      <ButtonLess type="button" onClick={DecrementPageExploreMovies}>
        &#8249;
      </ButtonLess>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          id={movie.id}
          isFavorite={isFavorite}
          addToFavorite={addToFavorite}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageExploreMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  );
};

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  IncrementPageExploreMovies: PropTypes.func.isRequired,
  pageMovie: PropTypes.number.isRequired,
  DecrementPageExploreMovies: PropTypes.func.isRequired,
};

export default ListMovies;
