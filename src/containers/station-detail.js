import React, { Component } from 'react';
import { connect } from 'react-redux';

class StationDetail extends Component {
    render() {
        if (!this.props.station) {
            return <div>Ready, steady go!</div>
        }
        return (
            <div>
                <h3>Details</h3>
                <div>{this.props.station.name}</div>
                <div>{this.props.station.id}</div>
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