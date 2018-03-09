import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import StationList from '../containers/station-list';
import StationDetail from '../containers/station-detail';
import ShowWeather from '../containers/show-weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Choose your path choose your destiny</h1>
        </div>
      <div>
        <div className="search-field"><SearchBar /></div>
        <div><StationList /></div>
        <div><StationDetail /></div>
        <div><ShowWeather /></div>
      </div>
      </div>
    );
  }
}
