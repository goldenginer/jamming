import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleTermChange() {
    const search = document.getElementById("searchInput").value
    this.props.onSearch(search);
  }

  render() {
    return (
      <div className="SearchBar">
        <input id="searchInput" placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.handleTermChange}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
