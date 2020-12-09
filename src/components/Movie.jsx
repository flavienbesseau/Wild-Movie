import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Img, LinkNav, Heart, Eye, Essai } from "../style/CardsMoviesCss";
import { IMAGE_BASE_URL } from "../const/Const";
import FavoritesContext from "../contexts/FavoritesContext";

const Movie = (props) => {
  const { posterPath, title, id } = props;
  const {
    favorites,
    onClickFavorite,
    onClickAlreadySeen,
    alreadySeen,
  } = useContext(FavoritesContext);
  return (
    <Essai>
      <LinkNav to={`/movie/${id}`}>
        {posterPath ? (
          <Img src={IMAGE_BASE_URL + posterPath} alt={title} />
        ) : (
          <Img src="https://via.placeholder.com/160x240" alt={title} />
        )}
      </LinkNav>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Heart
          className={favorites.includes(id) ? "isFavorite" : "notFavorite"}
          onClick={() => onClickFavorite(id)}
        />
        <Eye
          type="button"
          onClick={() => onClickAlreadySeen(id)}
          className={alreadySeen.includes(id) ? "notSeen" : "seen"}
        />
      </div>
    </Essai>
  );
};

Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
