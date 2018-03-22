import axios from 'axios';

const baseUrl = 'http://localhost:5300/';

export function selectStation(station) {
    return {
        type : 'STATION_SELECTED',
        payload : station
    }
}
export function fetchStations() {
    const request = axios.get(baseUrl + 'stations');
    return {
        type : "FETCH_STATIONS",
        payload : request
    }
}
export function fetchWeather(station) {
    const request2 = axios.get(baseUrl + 'info?id='+station.id);
    return {
        type : "FETCH_WEATHER",
        payload : request2
    }
}