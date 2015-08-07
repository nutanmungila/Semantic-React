'use strict';
import React from 'react';

export default class AnimatedButton extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    var className = "ui animated button";

    return( <div className={className} tabIndex="0">
                <div className="visible content">{this.props.visible}</div>
                <div className="hidden content">{this.props.hidden}</div>
            </div>
          );
  }

}
