import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/*
 * @Component Checkbox 
 * @param {string} type     默认 dot || count
 * @param {string} text     显示文本 '通知' || '消息'
 * @param {number} count    数字
 * @param {number} overflowCount     count>overflowCount,显示count+
 */

class Checkbox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultChecked : this.props.defaultChecked,
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

export default Checkbox

