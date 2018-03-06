import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStation } from '../actions/index';
import { bindActionCreators } from 'redux';

class StationList extends Component {
    renderList() {
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
            <ul className="list-group col-sm-4">
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
    return bindActionCreators({selectStation : selectStation }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StationList);