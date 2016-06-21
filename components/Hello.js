import React, { Component } from 'react'

class Hello extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.actions.changeText();
    }
    render(){
        return (<h1 onClick = {this.handleClick} >{ this.props.text }</h1>);
    }
}
export default Hello