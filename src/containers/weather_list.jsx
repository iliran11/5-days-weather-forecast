import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts.js'
import GoogleMap from '../components/google_map.js'

class WeatherList extends Component {
    renderWeather(citydata) {
        const name = citydata.city.name;
        const temp = [];
        const pressure = [];
        const humidity = [];
        const coordinates = {
            lat: citydata.city.coord.lat,
            lng: citydata.city.coord.lon
        }
        citydata.list.map((weatherSnapshot) => {
            pressure.push(weatherSnapshot.main.pressure);
            //convert kalvin to celcius
            temp.push(weatherSnapshot.main.temp - 273.15);
            humidity.push(weatherSnapshot.main.humidity);
        });
        return (
            <tr key={name}>
                <td><GoogleMap coordinates={coordinates}/></td>
                <td>
                    <Chart data={temp} color="orange" type="celcius"/>
                </td>
                <td>
                    <Chart data={pressure} color="red" type="hPa"/>
                </td>
                <td><Chart data={humidity} color="green" type="%"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
