import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import keyApi from "../const/apiKey";
import Movie from "./Movie";
import Footer from "./Footer";
import { Container, Div } from "../style/SearchPageCss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchedMovie: null };
  }

  searchMovie = (searchText) => {
    const preLien = "https://api.themoviedb.org/3/search/movie?api_key=";
    const url = `${preLien}${keyApi}&language=en-US&query=${searchText}&page=1&include_adult=false`;
    if (searchText) {
      axios.get(`${url}`).then((response) => {
        this.setState({ searchedMovie: response.data.results });
      });
    }
  };

  render() {
    const { searchedMovie } = this.state;
    return (
      <div>
        <SearchBar callback={this.searchMovie} searchedMovie={searchedMovie} />
        {!searchedMovie ? (
          <Div> </Div>
        ) : (
          <div>
            <Container>
              {searchedMovie.map((item) => (
                <Movie
                  posterPath={item.poster_path}
                  title={item.title}
                  id={item.id}
                />
              ))}
            </Container>
          </div>
        )}
        <Footer style={{ position: "absolute", bottom: "0" }} />
      </div>
    );
  }
}

export default Search;
