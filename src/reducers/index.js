import { combineReducers } from 'redux';
import StationReducer from './reducer_stations';
import ActiveStationReducer from './reducer_active_station';


const rootReducer = combineReducers({
  stations : StationReducer,
  activeStation : ActiveStationReducer
});

export default rootReducer;
