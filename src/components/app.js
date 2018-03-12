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
          <h1>Met weather for you!</h1>
        </div>
      <div>
       
          <div className="col-sm-4">
          <SearchBar />
          <StationList />
          </div>
          
          <div className="col-sm-8">
          
          <div><StationDetail /></div>
          <div><ShowWeather /></div>
          
        </div>
      </div>
      </div>
    );
  }
}
