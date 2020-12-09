import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

import _ from "lodash";
import ListMovies from "./components/ListMovies";
import GenreList from "./components/GenreList";
import Carrousel from "./components/Carrousel";
import FicheFilm from "./components/FicheFilm";
import Search from "./components/Search";
import Random from "./components/Random";
import Contact from "./components/Contact";
import UpCommingMovies from "./components/UpCommingMovies";
import PopularMovies from "./components/PopularMovies";
import MoreMovies from "./components/MoreMovies";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import MyList from "./components/MyList";
import FavoritesContext from "./contexts/FavoritesContext";
import NavbarComponent from "./components/NavBarComponent";

const apiEndPoint = "https://api.themoviedb.org/3/";
const popularMoviesUrl = "discover/movie?language=fr&sort_by=popularity.desc";
const images = "&append_to_response=images";
const apiKey = "api_key=184a078836bbb9d9a754e937f43861a4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: null,
      genres: null,
      // state from ListMovie
      movies: [],
      genresToFilter: [],
      isFavorite: false,
      favorites: [],
      alreadySeen: [],
      pageMovie: 1,
      pageMoviePopular: 1,
      pageMovieUpComing: 1,
      pageMoreMovies: 1,
      moviesMore: [],
      moviesPopular: [],
      moviesUpComing: [],
    };
  }

  componentDidMount() {
    this.initMovies();
    this.getSample();
    this.getTopRated();
    this.getMoreMovies();
    this.getPopularMovies();
    this.getUpComingMovies();
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
    // localStorage.clear();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      pageMovie,
      pageMovieUpComing,
      pageMoviePopular,
      pageMoreMovies,
    } = this.state;

    if (!_.isEqual(prevState.pageMovie, pageMovie)) {
      this.getTopRated();
    }

    if (!_.isEqual(prevState.pageMovieUpComing, pageMovieUpComing)) {
      this.getUpComingMovies();
    }

    if (!_.isEqual(prevState.pageMoreMovies, pageMoreMovies)) {
      this.getMoreMovies();
    }

    if (!_.isEqual(prevState.pageMoviePopular, pageMoviePopular)) {
      this.getPopularMovies();
    }
  }

  getSample = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=126f215d56fe6c222e6d996558bb1e98"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ genres: data.genres });
      });
  };

  initMovies = () => {
    axios
      .get(`${apiEndPoint}${popularMoviesUrl}${images}&${apiKey}`)
      .then((response) =>
        this.setState({ topRated: response.data.results.slice(1, 6) })
      );
  };

  getTopRated = () => {
    const { pageMovie } = this.state;
    const key = "126f215d56fe6c222e6d996558bb1e98";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-
    US&page=${pageMovie}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => response.results)
      .then((movieArray) => this.setState({ movies: movieArray }));
  };

  // Api request for list UpcomingMovies

  getUpComingMovies = () => {
    const { pageMovieUpComing } = this.state;
    const key = "126f215d56fe6c222e6d996558bb1e98";
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-
    US&page=${pageMovieUpComing}`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => res.results)
      .then((movieUpComingArr) =>
        this.setState({ moviesUpComing: movieUpComingArr })
      );
  };

  // Api request for list PopularMovies
  getPopularMovies = () => {
    const { pageMoviePopular } = this.state;
    const key = "126f215d56fe6c222e6d996558bb1e98";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-
    US&page=${pageMoviePopular}
    `;
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => res.results)
      .then((moviePopularArr) =>
        this.setState({ moviesPopular: moviePopularArr })
      );
  };

  // Api request for list MoreMovies
  getMoreMovies = () => {
    const { pageMoreMovies } = this.state;
    const key = "126f215d56fe6c222e6d996558bb1e98";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-
    US&page=${pageMoreMovies}`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => res.results)
      .then((movieMoreArr) => this.setState({ moviesMore: movieMoreArr }));
  };

  // listening method for genre button click
  handleButtonClicked = (ev) => {
    const { genresToFilter } = this.state;
    let newGenresToFilter = [...genresToFilter];
    if (!newGenresToFilter.includes(Number(ev.currentTarget.value))) {
      newGenresToFilter.push(Number(ev.currentTarget.value));
    } else {
      newGenresToFilter = newGenresToFilter.filter(
        (e) => e !== Number(ev.currentTarget.value)
      );
    }
    this.setState({ genresToFilter: newGenresToFilter });
  };

  // Method for change page with button at the end of list MoreMovies

  // method to change page on component MoreMovies
  IncrementPageMoreMovies = () => {
    const { pageMoreMovies } = this.state;
    this.setState({ pageMoreMovies: pageMoreMovies + 1 });
    this.getMoreMovies();
  };

  DecrementPageMoreMovies = () => {
    const { pageMoreMovies } = this.state;
    this.setState({ pageMoreMovies: pageMoreMovies - 1 });
    this.getMoreMovies();
  };

  // method to change page on component UpComingMovies

  IncrementPageUpComingMovies = () => {
    const { pageMovieUpComing } = this.state;
    this.setState({ pageMovieUpComing: pageMovieUpComing + 1 });
    this.getUpComingMovies();
  };

  DecrementPageUpComingMovies = () => {
    const { pageMovieUpComing } = this.state;
    this.setState({ pageMovieUpComing: pageMovieUpComing - 1 });
    this.getUpComingMovies();
  };

  // method to change page on component PopularMovies

  IncrementPagePopularMovies = () => {
    const { pageMoviePopular } = this.state;
    this.setState({ pageMoviePopular: pageMoviePopular + 1 });
    this.getPopularMovies();
  };

  DecrementPagePopularMovies = () => {
    const { pageMoviePopular } = this.state;
    this.setState({ pageMoviePopular: pageMoviePopular - 1 });
    this.getPopularMovies();
  };

  // method to change page on component ListMovies

  IncrementPageExploreMovies = () => {
    const { pageMovie } = this.state;
    this.setState({ pageMovie: pageMovie + 1 });
    this.getTopRated();
  };

  DecrementPageExploreMovies = () => {
    const { pageMovie } = this.state;
    this.setState({ pageMovie: pageMovie - 1 });
    this.getTopRated();
  };

  // method to add movie to Favorite list

  onClickFavorite = (id) => {
    const { favorites } = this.state;
    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
    } else {
      favorites.push(id);
    }
    this.setState({ favorites }, this.saveStateToLocalStorage);
  };

  // method to add movie to alreadySeen list

  onClickAlreadySeen = (id) => {
    const { alreadySeen } = this.state;
    if (alreadySeen.includes(id)) {
      alreadySeen.splice(alreadySeen.indexOf(id), 1);
    } else {
      alreadySeen.push(id);
    }
    this.setState({ alreadySeen }, this.saveStateToLocalStorage);
  };

  // method for local storage

  saveStateToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  render() {
    const { topRated: topRatedMovies } = this.state;
    const {
      genres,
      movies,
      genresToFilter,
      isFavorite,
      favorites,
      pageMoreMovies,
      moviesMore,
      alreadySeen,
    } = this.state;
    const {
      moviesPopular,
      moviesUpComing,
      pageMovie,
      pageMoviePopular,
      pageMovieUpComing,
    } = this.state;

    const listFiletred = movies
      .filter((movie) =>
        genresToFilter.includes(movie.genre_ids[0] || movie.genre_ids[1])
      )
      .map((movie) => movie);

    const upComingFiltred = moviesUpComing
      .filter((movie) =>
        genresToFilter.includes(movie.genre_ids[0] || movie.genre_ids[1])
      )
      .map((movie) => movie);

    const moviesPopularFiltered = moviesPopular
      .filter((movie) =>
        genresToFilter.includes(movie.genre_ids[0] || movie.genre_ids[1])
      )
      .map((movie) => movie);

    const moviesMoreFiltered = moviesMore
      .filter((movie) =>
        genresToFilter.includes(movie.genre_ids[0] || movie.genre_ids[1])
      )
      .map((movie) => movie);

    return (
      <Router className="body">
        <FavoritesContext.Provider
          value={{
            favorites,
            alreadySeen,
            onClickFavorite: this.onClickFavorite,
            onClickAlreadySeen: this.onClickAlreadySeen,
          }}
        >
          <NavbarComponent />
          <Switch>
            <Route exact path="/">
              {topRatedMovies ? (
                <Carrousel topRatedMovies={topRatedMovies} />
              ) : (
                <p>loading</p>
              )}
              <div>
                {genres ? (
                  <GenreList
                    genres={genres}
                    handleButtonClicked={this.handleButtonClicked}
                    genresToFilter={genresToFilter}
                  />
                ) : (
                  <p>loading</p>
                )}
              </div>
              <div>
                <h1 className="title">Explore</h1>
                {!genresToFilter.length ? (
                  <ListMovies
                    pageMovie={pageMovie}
                    DecrementPageExploreMovies={this.DecrementPageExploreMovies}
                    IncrementPageExploreMovies={this.IncrementPageExploreMovies}
                    movies={movies}
                    genresToFilter={genresToFilter}
                    isFavorite={isFavorite}
                    addToFavorite={this.addToFavorite}
                  />
                ) : (
                  <ListMovies
                    pageMovie={pageMovie}
                    DecrementPageExploreMovies={this.DecrementPageExploreMovies}
                    IncrementPageExploreMovies={this.IncrementPageExploreMovies}
                    movies={listFiletred}
                    genresToFilter={genresToFilter}
                    isFavorite={isFavorite}
                    addToFavorite={this.addToFavorite}
                  />
                )}
              </div>
              <div>
                <h1 className="title">Upcoming</h1>
                {!genresToFilter.length ? (
                  <UpCommingMovies
                    pageMovieUpComing={pageMovieUpComing}
                    IncrementPageUpComingMovies={
                      this.IncrementPageUpComingMovies
                    }
                    DecrementPageUpComingMovies={
                      this.DecrementPageUpComingMovies
                    }
                    moviesUpComing={moviesUpComing}
                  />
                ) : (
                  <UpCommingMovies
                    pageMovieUpComing={pageMovieUpComing}
                    IncrementPageUpComingMovies={
                      this.IncrementPageUpComingMovies
                    }
                    DecrementPageUpComingMovies={
                      this.DecrementPageUpComingMovies
                    }
                    moviesUpComing={upComingFiltred}
                  />
                )}
              </div>
              <div>
                <h1 className="title">Popular</h1>
                {!genresToFilter.length ? (
                  <PopularMovies
                    pageMoviePopular={pageMoviePopular}
                    IncrementPagePopularMovies={this.IncrementPagePopularMovies}
                    DecrementPagePopularMovies={this.DecrementPagePopularMovies}
                    moviesPopular={moviesPopular}
                  />
                ) : (
                  <PopularMovies
                    pageMoviePopular={pageMoviePopular}
                    IncrementPagePopularMovies={this.IncrementPagePopularMovies}
                    DecrementPagePopularMovies={this.DecrementPagePopularMovies}
                    moviesPopular={moviesPopularFiltered}
                  />
                )}
              </div>
              <div>
                <h1 className="title">More</h1>
                {!genresToFilter.length ? (
                  <MoreMovies
                    pageMoreMovies={pageMoreMovies}
                    IncrementPageMoreMovies={this.IncrementPageMoreMovies}
                    DecrementPageMoreMovies={this.DecrementPageMoreMovies}
                    moviesMore={moviesMore}
                  />
                ) : (
                  <MoreMovies
                    pageMoreMovies={pageMoreMovies}
                    IncrementPageMoreMovies={this.IncrementPageMoreMovies}
                    DecrementPageMoreMovies={this.DecrementPageMoreMovies}
                    moviesMore={moviesMoreFiltered}
                  />
                )}
              </div>
              <Footer />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/random">
              <Random />
            </Route>
            <Route exact path="/myprofile/mylist">
              <MyList favorites={favorites} alreadySeen={alreadySeen} />
            </Route>
            <Route exact path="/myprofile/contact">
              <Contact />
            </Route>
            <Route exact path="/myprofile/settings">
              <Settings />
            </Route>
            <Route exact path="/movie/:id" component={FicheFilm} />
          </Switch>
        </FavoritesContext.Provider>
      </Router>
    );
  }
}

export default App;
