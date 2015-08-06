'use strict';
import React from 'react';
import RadioItems from './RadioItems'

export default class Radiocomp extends React.Component{
	constructor(props){
		super(props);
		this.state = {rval:""};
		this.onItemSelectHandler = this.onItemSelectHandler.bind(this);
	}
	onItemSelectHandler(val){
		this.setState({rval:val});
	}
	render(){
		return(<div>You Have Selected {this.state.rval}
			       {this.props.items.map((item)=>{
						return(<RadioItems key={item} itm={item} onSelectedItem={this.onItemSelectHandler}/>);
					})}
			   </div>);
	}
}