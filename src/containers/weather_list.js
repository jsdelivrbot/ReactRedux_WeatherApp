import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData, index) {

    //console.log('cityData: ',cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
     const lon = cityData.city.coord.lon;
     const lat = cityData.city.coord.lat;
    //const { lon, lat } = cityData.city.coord;

    console.log('coord: ',cityData.city.coord, lon, lat);
    return (
        <tr key={index}>
          <td>{name}<GoogleMap lat={lat} lon={lon} /></td>
          <td><Charts data={temps} color="orange" units="K" /></td>
          <td><Charts data={pressures} color="blue" units="hPa" /></td>
          <td><Charts data={humidities} color="green" units="%" /></td>
        </tr>
      )
  }

  render(){
    console.log('weather props in weatherlist: ', this.props.weather);
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}


export default connect(mapStateToProps)(WeatherList);
