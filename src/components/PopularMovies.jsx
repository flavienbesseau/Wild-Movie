import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import {
  Container,
  ButtonPlus,
  ButtonLess,
  Arrow,
} from "../style/ListMovieCss";

const PopularMovies = ({
  moviesPopular,
  IncrementPagePopularMovies,
  DecrementPagePopularMovies,
  pageMoviePopular,
}) => {
  return pageMoviePopular === 1 ? (
    <Container>
      {moviesPopular.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPagePopularMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  ) : (
    <Container>
      <ButtonLess type="button" onClick={DecrementPagePopularMovies}>
        <Arrow>&#8249;</Arrow>
      </ButtonLess>
      {moviesPopular.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPagePopularMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  );
};

PopularMovies.propTypes = {
  moviesPopular: PropTypes.arrayOf(PropTypes.object).isRequired,
  IncrementPagePopularMovies: PropTypes.func.isRequired,
  DecrementPagePopularMovies: PropTypes.func.isRequired,
  pageMoviePopular: PropTypes.number.isRequired,
};

export default PopularMovies;
