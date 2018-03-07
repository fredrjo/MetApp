export default function () {
    return fetch('http://localhost:5000/stations').then(res => res.json());//.then(data => console.log( data));
    return ([
        {name : 'Blindern', coord : '002, 004' },
        {name : 'Trondheim', coord : '005, 010'}
    ]);                       
}