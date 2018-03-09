import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''}
    }
    render() { 
        return (<div>
            <input onChangeEvent={event => this.setState({term : event.target.value})}/>
            <button onClick={this.onClickEvent}>Search</button>
            </div>);
    }
    onClickEvent() {
        alert(this.state.term);
    }
    onChangeEvent(event) {
        this.setState({term : event.target.value});
    }
}
export default SearchBar;