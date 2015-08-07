'use strict';
import React from 'react';

export default class AnimatedButton extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    var className = "ui animated button";
    if(this.props.vertical){
      className = className+" vertical";
    }
    if(this.props.fade){
      className = className+" fade";
    }
    return( <div className={className} tabIndex="0">
                <div className="visible content">{this.props.visible}</div>
                <div className="hidden content">{this.props.hidden}</div>
            </div>
          );
  }

}
