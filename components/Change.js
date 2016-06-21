import React, { Component } from 'react'

export default class Change extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.actions.buttonClick();
    }
    render(){
        return (
            <button onClick = {this.handleClick}> Change </button>
        );
    }
}