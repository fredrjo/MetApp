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
        let y = [];
        
        for (let i=0;i<this.props.weather.length;i++) {
            x[i]=new Date(this.props.weather[i].time);
            y[i]=this.props.weather[i].value;
        }
        console.log(this.props.weather);
        return (
            <div>
            <Sparklines height={240} width={360} data={this.props.weather}>
                <SparklinesLine color="red" />
            </Sparklines>
            <Plot
            data={
                [{
                x ,
                y,
                type: 'line',
                mode: 'lines+points',
                marker: {color: 'red'},
              }] }
            layout={{width: 510, height: 420, showgrid :true, gridcolor : "#333", title: 'This is your graph'}}></Plot></div>
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