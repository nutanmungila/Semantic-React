'use strict';
import React from 'react';
import Dropdown from './dropdown/dropdown';
import Radiocomp from './radiobutton/Radiocomp';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
            <div>
              <Dropdown items={this.props.itemList}/>
              <Radiocomp items={this.props.itemList} />
            </div>
        );
  }

}

App.propTypes = { itemList: React.PropTypes.array.isRequired };
App.defaultProps = { itemList: ["aa","bb","cc","dd","ff","gg","hh","ii"] };

React.render( <App /> , document.body);
