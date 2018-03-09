import { combineReducers } from 'redux';
import StationReducer from './reducer_stations';
import ActiveStationReducer from './reducer_active_station';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  stations : StationReducer,
  activeStation : ActiveStationReducer,
  activeWeather : WeatherReducer
});

export default rootReducer;
