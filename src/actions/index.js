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