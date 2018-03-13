export default function (state=[], action) {
    switch(action.type) {
        case 'FETCH_STATIONS':
            return action.payload.data;
        case 'FETCH_STATIONS_FULFILLED':
            return action.payload.data;
    }
    return state;                      
}