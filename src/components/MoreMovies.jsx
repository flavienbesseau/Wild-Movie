import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import {
  Container,
  ButtonPlus,
  ButtonLess,
  Arrow,
} from "../style/ListMovieCss";

const MoreMovies = ({
  moviesMore,
  IncrementPageMoreMovies,
  DecrementPageMoreMovies,
  pageMoreMovies,
}) => {
  return pageMoreMovies === 1 ? (
    <Container>
      {moviesMore.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageMoreMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  ) : (
    <Container>
      <ButtonLess type="button" onClick={DecrementPageMoreMovies}>
        &#8249;
      </ButtonLess>
      {moviesMore.map((item) => (
        <Movie
          posterPath={item.poster_path}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
      <ButtonPlus type="button" onClick={IncrementPageMoreMovies}>
        <Arrow>&#8250;</Arrow>
      </ButtonPlus>
    </Container>
  );
};

MoreMovies.propTypes = {
  moviesMore: PropTypes.arrayOf(PropTypes.object).isRequired,
  IncrementPageMoreMovies: PropTypes.func.isRequired,
  DecrementPageMoreMovies: PropTypes.func.isRequired,
  pageMoreMovies: PropTypes.number.isRequired,
};

export default MoreMovies;
