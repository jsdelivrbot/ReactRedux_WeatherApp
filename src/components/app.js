import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  count() {
    var number = [1,2,3,4];
    var list = number.map((num) => num * 2);
    console.log('list', list);
  }
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        <div>{this.count}</div>
      </div>
    );
  }
}
