import React, { Component } from 'react';
import SearchBar from './search_bar';
import StationList from '../containers/station-list';
import StationDetail from '../containers/station-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div><SearchBar /></div>
        <div><StationList /></div>
        <div><StationDetail /></div>
      </div>
    );
  }
}
