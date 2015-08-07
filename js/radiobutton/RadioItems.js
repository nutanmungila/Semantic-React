'use strict'
import React from 'react';

export default class RadioItems extends React.Component{
	constructor(props){
		super(props);
		this.onClickRadio = this.onClickRadio.bind(this);
	}

	onClickRadio(){
		this.props.onSelectedItem(this.props.itm);
	}

	render(){
		return( <div className="ui radio checkbox">
							<input type="radio" name="sex" value="male" onClick={this.onClickRadio}/>
							<label>{this.props.itm}</label>
						</div>
			  );
	}
}
