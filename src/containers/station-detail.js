import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import GoogleMap from '../components/google_map';

class StationDetail extends Component {
    
    render() {
        if (!this.props.station) {
            return <div>Ready, steady go!</div>
        }
        let coord = this.props.station.masl.split(" ");

        return (
            <div className="alert alert-success">
                <h3>{this.props.station.name}</h3>
                <GoogleMap lng={coord[0]} lat={coord[1]} />
                <div>{this.props.station.id}</div>
                <div>{this.props.station.masl}</div>
                <div>Her kommer oversikt over detaljer for stasjonen</div>
                <div>-- Her blir det mer</div>
                <div>-- Her blir det enda mer</div>
                <div>-- Her blir...</div>
                <div>
                    <button 
                        onClick={() => this.props.fetchWeather(this.props.station)}
                        className="btn btn-success">Get weather
                    </button>
                </div>
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