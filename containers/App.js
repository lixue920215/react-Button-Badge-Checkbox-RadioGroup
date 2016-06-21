import React, { Component } from 'react'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Checkbox from '../components/Checkbox'
import {RadioGroup} from '../components/RadioGroup'

class App extends Component{
    constructor(props){
        super(props);
		this.state = {
			selectedValue : 'Apple',
			value         : ['Apple','Orange','Watermelon']
		}
    }
	//改变radiogroup变中值value
    handleChange(value) {
        this.setState({ selectedValue: value });
    }
	
    render(){
        return (
            <div>
                <div>
                    <h1>color</h1>
                    <Button color="disabled" />
                    <Button color="orange" text="orange" />
                    <Button color="blue" text="blue" />
                    <Button color="green" text="green" />
                    <Button color="red" text="red" />
                    <Button color="gray" text="gray" />
                </div>
                <div>
                    <h1>size</h1>
                    <Button size="large" text="large" />
                    <Button size="middle" text="middle" />
                    <Button size="small" text="small" />
                    <Button size="tiny" text="tiny" />
                    <Button size="mini" text="mini" />
                </div>
                <div>
                    <h1>fluid</h1>
                    <Button type="fluid" />
                </div>
                <div>
                    <h1>loading</h1>
                    <Button load={true} text="loading" click={true} />
                </div>
                <div>
                    <h1>消息</h1>
                    <Badge text="通知" />
                    <Badge type="count" count={5} overflowCount={99} />
                    <Badge type="count" count={999} overflowCount={99} />
                </div>
				<div>
					<h1>checkbox</h1>
					<Checkbox  defaultChecked={false} text="Checkbox" />
					<Checkbox  defaultChecked={false} disabled={true} text="disabled" />
					<Checkbox  defaultChecked={true} disabled={true} text="disabled" />
				</div>
				<div>
					<h1>RadioGroup</h1>
					<RadioGroup name="fruit" selectedValue={this.state.selectedValue} value={this.state.value} onChange={this.handleChange.bind(this)} />
				</div>
            </div>
        );
    }
}
export default App