import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/*
 * @Component Badge 
 * @param {string} type     默认 dot || count
 * @param {string} text     显示文本 '通知' || '消息'
 * @param {number} count    数字
 * @param {number} overflowCount     count>overflowCount,显示count+
 */

class Badge extends Component {
    constructor(props) {
        super(props);  
		this.state = {
			type          : this.props.type || 'dot',
			count         : this.props.count,
			overflowCount : this.props.overflowCount,
			text     	  : this.props.text || '通知'
		}
    }
	
	handleClick() {
		if(this.props.click){
			this.props.click();
		}
	}
	
    render() {
		// css 组合
        let badgeClass = classNames({
            [`badge-${this.state.type}`]: true,
        });
		
        return (
            <span {...this.props} className="badge" onClick={this.handleClick.bind(this)}>
                <a href="javascript:;" className="head-example"> {this.state.text} </a>
                <a className={badgeClass} >
                    { (this.state.count > this.state.overflowCount) ?  this.state.overflowCount + '+' :this.state.count }
                </a>
            </span>
        );
    }
}
Badge.propTypes = {
    type    : PropTypes.string,
    text    : PropTypes.string,
    count   : PropTypes.number,
    overflowCount   : PropTypes.number
}

export default Badge
