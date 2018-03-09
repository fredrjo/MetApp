import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <div><button className="btn btn-success">Get weather</button></div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        station : state.activeStation
    }
}
export default connect(mapStateToProps)(StationDetail);