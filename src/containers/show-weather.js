import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class ShowWeather extends Component {
    renderList() {
        if (this.props.weather.length<1) {
            return (<li>No weather</li>);
        }
        return (
            <Sparklines height={240} width={360} data={this.props.weather}>
                <SparklinesLine color="red" />
            </Sparklines>
        );
    }
    
    render() {
        return (
            <div className="list-group col-sm-8">
                {this.renderList()}
            </div>
        )    
    }
}
function mapStateToProps(state) {
    return {
        weather : state.activeWeather
    }
}
export default connect(mapStateToProps)(ShowWeather);