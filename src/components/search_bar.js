import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term : ''}
    }
    render() { 
        return (<div>
            <input onChange={event => this.setState({term : event.target.value})} />
            {this.state.term}
            </div>);
    }
    onChangeEvent(event) {
        console.log(event.target.value);
    }
}
export default SearchBar;