import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class StationDetail extends Component {
    render() {
        if (!this.props.station) {
            return <div>Ready, steady go!</div>
        }
        return (
            <div className="alert alert-success">
                <h3>{this.props.station.name}</h3>
                <div>{this.props.station.id}</div>
                <div>{this.props.station.masl}</div>
                <div><button 
                onClick={() => this.props.fetchWeather(this.props.station)}
                className="btn btn-success">Get weather</button></div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        station : state.activeStation
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather : fetchWeather }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StationDetail);