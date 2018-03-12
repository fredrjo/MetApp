import axios from 'axios';
export function selectStation(station) {
    return {
        type : 'STATION_SELECTED',
        payload : station
    }
    //console.log('You have selected station: ', station.station.name);
}
export function fetchStations() {
    const request = axios.get('http://localhost:5000/stations');
    return {
        type : "FETCH_STATIONS",
        payload : request
    }
}
export function fetchWeather(station) {
    console.log(station);
    const request2 = axios.get('http://localhost:5000/info?id='+station.id);
    return {
        type : "FETCH_WEATHER",
        payload : request2
    }
}