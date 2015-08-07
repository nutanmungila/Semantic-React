'use strict';
import React from 'react';

export default class Icon extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    var className = this.props.value+" icon";
    return(
            <i className={className}></i>
          );
  }

}
