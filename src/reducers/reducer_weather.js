export default function (state=[], action) {
    switch(action.type) {
        case 'FETCH_WEATHER':
            return action.payload.data;
        case 'FETCH_WEATHER_FULFILLED':
            return action.payload.data;
    }
    return state;                      
}