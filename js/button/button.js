'use strict';
import React from 'react';

export default class Button extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    var className = "ui button ";
    var value = "button";
    if(this.props.label){
      value = this.props.label;
    }
    if(this.props.primary){
      className = className+"primary";
    }
    if(this.props.secondary){
      className = className+"secondary";
    }
    if(this.props.icon){
      className = className+"icon";
      value = this.props.icon;
    }

    return(
              <button className={className} >{value}</button>
          );
  }

}
