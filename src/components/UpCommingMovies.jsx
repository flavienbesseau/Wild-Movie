import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import {
  Container,
  ButtonPlus,
  ButtonLess,
  Arrow,
} from "../style/ListMovieCss";

const UpComingMovies = ({
  moviesUpComing,
  IncrementPageUpComingMovies,
  pageMovieUpComing,
  DecrementPageUpComingMovies,
}) => {
  return pageMovieUpComing === 1 ? (
    <Container>
      {moviesUpComing.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageUpComingMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  ) : (
    <Container>
      <ButtonLess type="button" onClick={DecrementPageUpComingMovies}>
        <Arrow>&#8249;</Arrow>
      </ButtonLess>
      {moviesUpComing.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageUpComingMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  );
};

UpComingMovies.propTypes = {
  moviesUpComing: PropTypes.arrayOf(PropTypes.object).isRequired,
  IncrementPageUpComingMovies: PropTypes.func.isRequired,
  DecrementPageUpComingMovies: PropTypes.func.isRequired,
  pageMovieUpComing: PropTypes.number.isRequired,
};

export default UpComingMovies;
