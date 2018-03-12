import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log('lag kart');
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : {
                lat : Number(this.props.lat),
                lng : Number(this.props.lng)
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : {
                lat : Number(nextProps.lat),
                lng : Number(nextProps.lng)
            }
        });
    }
    
    render() {
        return <div className="googlemap" ref="map" />;
    }
}
export default GoogleMap;