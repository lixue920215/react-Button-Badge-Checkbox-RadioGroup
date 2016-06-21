import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/*
 * @Component Checkbox 
 * @param {bool} defaultChecked     选中 default: false || true
 * @param {bool} disabled    不可单击 default false || true
 * @param {string} classVal   新增加的class值  
 * @param {func} onClick     callback
 */

class Checkbox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultChecked : this.props.defaultChecked || false,
            disabled 	   : this.props.disabled || false,
            classVal       : this.props.className || '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		if (this.props.onClick){
            this.props.onClick()
        }
        this.setState({
            defaultChecked : !this.state.defaultChecked
        });
    }

    componentWillReceiveProps (nextProps) {
        if ( nextProps.defaultChecked != this.state.defaultChecked ) {

            this.setState({
                defaultChecked : nextProps.defaultChecked
            });
        }
    }

    render() {
        // css 组合
        var boxClass = classNames({
            'checkbox-wrapper' : true,
            'checkbox-checked' : this.state.defaultChecked,
            'checkbox-disabled': this.state.disabled,
            [`${this.state.classVal}`]: this.state.classVal.length > 0
        });

        return (
            <div className={boxClass} onClick={!this.state.disabled && this.handleClick}>
                <span className="checkbox">
                    <span className="checkbox-inner"></span>
                    <input type="checkbox" className="checkbox-input" value={this.state.defaultChecked ? 1 : 0} disabled={this.state.disabled} />
                </span>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

Checkbox.propTypes = {
	
}

export default Checkbox

