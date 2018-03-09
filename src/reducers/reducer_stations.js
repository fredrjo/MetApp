export default function (state=[], action) {
    switch(action.type) {
        case 'FETCH_STATIONS':
            console.log(action);
            return action.payload.data;
        case 'FETCH_STATIONS_FULFILLED':
            return action.payload.data;
    }
    return state;
    //return fetch('http://localhost:5000/stations').then(res => res.json());//.then(data => console.log( data));
    //return ([
    //    {name : 'Blindern', coord : '002, 004' },
    //    {name : 'Trondheim', coord : '005, 010'}
    //]);                       
}