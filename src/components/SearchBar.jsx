import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Search, Button } from "../style/SearchCss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeHolder: "Type your movie..." };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchText: event.target.value });
  };

  handleEnter = (event) => {
    if (event.keyCode === 13) {
      this.search();
    }
  };

  search = () => {
    const { callback } = this.props;
    const { searchText } = this.state;
    callback(searchText);
  };

  render() {
    const { placeHolder } = this.state;
    return (
      <Container>
        <Search
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
          type="text"
          placeholder={placeHolder}
        />
        <Button onClick={this.search} type="button">
          Search
        </Button>
      </Container>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SearchBar;
