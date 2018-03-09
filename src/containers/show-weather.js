import React, { Component } from 'react';
import { connect } from 'react-redux';




class ShowWeather extends Component {
    renderList() {
        if (!this.props.weather.data) {
            return (<li>No weather</li>);
        }
        console.log(this.props.weather.data);
        //return <div>got goatS</div>;
        return this.props.weather.data.map((weather) => {
            return (
                <li 
                key={weather.referenceTime} 
                className="list-group-item">{weather.referenceTime}</li>
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
        weather : state.activeWeather
    }
}
export default connect(mapStateToProps)(ShowWeather);