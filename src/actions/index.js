export function selectStation(station) {
    return {
        type : 'STATION_SELECTED',
        payload : station
    }
    //console.log('You have selected station: ', station.station.name);
}