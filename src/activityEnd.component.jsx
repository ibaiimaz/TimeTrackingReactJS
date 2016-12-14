import React, { Component } from 'react';

class Activity extends Component {
    render(){
        return (<h1>Activity Param: {this.props.params.id}</h1>);
    }
}

export default Activity
