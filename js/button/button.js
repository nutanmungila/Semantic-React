'use strict';
import React from 'react';

export default class Button extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    var className = "ui button ";
    if(this.props.primary){
      className = className+"primary";
    }
    if(this.props.secondary){
      className = className+"secondary";
    }
    if(this.props.icon){
      className = className+"icon";
    }

    return(
              <button className={className} >{this.props.label}</button>
          );
  }

}
