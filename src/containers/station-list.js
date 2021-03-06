import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStation, fetchStations } from '../actions/index';
import { bindActionCreators } from 'redux';

class StationList extends Component {
    componentWillMount() {
        this.props.fetchStations();
    }

    renderList() {
        if (!this.props.stations) {
            return (<li>hello</li>);
        }
        return this.props.stations.map((station) => {
            return (
                <li 
                key={station.name} 
                onClick={() => this.props.selectStation(station)}
                className="list-group-item">{station.name}</li>
            );
        });
    }
    
    render() {
        return (
            <ul className="myList">
                {this.renderList()}
            </ul>
        )    
    }
}
function mapStateToProps(state) {
    return {
        stations : state.stations
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectStation : selectStation, fetchStations : fetchStations }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StationList);