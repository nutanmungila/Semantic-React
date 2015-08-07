'use strict';
import React from 'react';
import Popup from './popup';

export default class Dropdown extends React.Component {

  constructor(props) {
      super(props);
      this.onClickbox = this.onClickbox.bind(this);
      this.onItemSelectedHandler = this.onItemSelectedHandler.bind(this);
      this.state = {showPopup:false,selectedItemvalue:"Dropdown"};
  }

  onItemSelectedHandler(vl){
      React.findDOMNode(this.refs.menubox).value = vl;
      this.setState({selectedItemvalue:vl});
  }

  onClickbox(e){
      e.nativeEvent.stopImmediatePropagation();
      this.setState({showPopup:!(this.state.showPopup)});
  }

  componentDidMount(){
      document.addEventListener("click",()=>{
        this.setState({showPopup:false});
      })
  }

  render(){
      var classNames = "ui dropdown ";
      classNames = this.state.showPopup ? classNames + " active visible" : classNames;

      var popUpClassNames = "transition";
      popUpClassNames = this.state.showPopup ? popUpClassNames + " visible" : popUpClassNames + " hidden";
      return(
            <div className={classNames} ref="menubox" onClick={this.onClickbox} >
              <div className="text">{this.state.selectedItemvalue}</div>
              <i className="dropdown icon"></i>
              <Popup className={popUpClassNames} elts={this.props.items} onItemSelected={this.onItemSelectedHandler}/>
            </div>
        );
  }

}
