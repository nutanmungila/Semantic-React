'use strict'
import React from 'react';
export default class Popupitem extends React.Component{

	constructor(props){
			super(props);
			this.onClickPopupitem = this.onClickPopupitem.bind(this);
	}

	onClickPopupitem(e){
     	this.props.onSelectedItem(this.props.itm);
	}

	render(){
			return(<div className="item" onClick={this.onClickPopupitem}>{this.props.itm}</div>);
	}
}
