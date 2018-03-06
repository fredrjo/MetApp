export default function (state = null, action) {
    switch(action.type) {
        case 'STATION_SELECTED':
            return action.payload;
    }
    return state;
}