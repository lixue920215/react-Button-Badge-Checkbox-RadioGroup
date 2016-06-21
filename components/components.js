/*import React, {Component} from 'react' 


//hello组件
class Hello extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.actions.changeText();
    }
    render(){
        return (
            <h1 onClick = {this.handleClick}> {this.props.text} </h1>
        );
    }
}

//Change组件
 class Change extends Component{
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

//父App
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {actions, text} = this.props
        return (
            <div>
                <Hello actions = {actions}  text = {text} />
                <Change actions = {actions} />
            </div>
        );
    }
}*/
