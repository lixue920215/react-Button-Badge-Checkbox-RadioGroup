import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'


export class Radio extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		const optional = {};
		
		if(this.props.selectedValue !== 'undefined'){
			optional.checked = (this.props.value === this.props.selectedValue);
		}
		
		if(typeof this.props.onChange === 'function') {
			optional.onChange = this.props.onChange.bind(null, this.props.value);
		}
		
		return(
			<div className="radio" onClick={optional.onChange}>
				<div className="radio-inner">
					<input type="radio" name={this.props.name} {...this.props} {...optional} />
					<span></span>
				</div>
				{this.props.value}
			</div>
		)
	}
}

export class RadioGroup extends Component{
	constructor(props) {
        super(props);
		this.state = {
			listValue : this.props.value
		}
    }
	
	render() {
		const { name, selectedValue, onChange, value } = this.props;
		let propsChildren = this.state.listValue.map(function (item) {
			return (<Radio value={item} name={name} selectedValue={selectedValue} onChange={onChange} />);
		});
			
		return(
			<div {...this.props}>
				{propsChildren}
			</div>
		);
	}
}

