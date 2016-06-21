import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import omit from 'object.omit'

const propTypes = {
    className : PropTypes.string,
    text      : PropTypes.string.isRequired,
    color     : PropTypes.string,
    size      : PropTypes.string,
    fluid     : PropTypes.bool,
    load      : PropTypes.bool,
    click     : PropTypes.bool
};

const defaultProps = {
    className : 'button',
    text      : 'Button'
};

class Button extends Component {
        
    constructor(props) {
        super(props);                
        this.state = {
            type: this.
        }
    }
    render() {
        var color = this.props.color ? 'btn-' + this.props.color : '',
            size  = this.props.size  ? 'btn-' + this.props.size  : '',
            fluid = this.props.fluid ? 'btn-fluid' : '',
            load  = this.props.load  ? 'btn-load'  : '';
        return (
            <button {...this.props} className = {classNames( this.props.className ,color, size, fluid,load)} >
                {this.props.text}
            </button>
        )
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button


class Button extends Component {
    constructor (props) {
        super(props);

        this.state = {
            type: this.props.type ? this.props.type : 'default',
            size: this.props.size ? this.props.size : 'normal',
            classVal: this.props.className || '',
            text: null
        }

    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    render() {
        // css 组合
        var btnClass = classNames({
            'btn': true,
            [`btn-${this.state.type}`]: true,
            [`btn-${this.state.size}`]: true,
            [`${this.state.classVal}`]: true
        });
        return (
            <button className={btnClass}
                    onClick={this.handleClick.bind(this)}>
                {this.state.text || this.props.children}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string
}

export default Button

