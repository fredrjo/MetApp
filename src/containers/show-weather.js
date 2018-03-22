import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Plot from 'react-plotly.js'

class ShowWeather extends Component {
    renderList() {
        if (this.props.weather.length<1) {
            return (<li>No weather</li>);
        }
        let x = [];
        console.log(this.props.weather);
        for (let i=0;i<this.props.weather.length; i++) {
            x[i]=i*.1;
        }
        return (
            <div>
            <Sparklines height={240} width={360} data={this.props.weather}>
                <SparklinesLine color="red" />
            </Sparklines>
            <Plot
            data={
                [{
                x : x,
                y: this.props.weather,
                type: 'line',
                mode: 'lines+points',
                marker: {color: 'red'},
              }] }
            layout={{width: 510, height: 420, title: 'You can touch this'}}></Plot></div>
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