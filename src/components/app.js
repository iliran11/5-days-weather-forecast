import React, {Component} from 'react';
import SearchBar from '../containers/search_bar.jsx';
import WeatherList from '../containers/weather_list.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
              <h1>Type a City  and get a 5 day forcast!</h1>
              <SearchBar initialState = {["tel aviv", "haifa"]}/>
              <WeatherList/>
            </div>
        );
    }
}
