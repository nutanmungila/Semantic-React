'use strict';
import React from 'react';
import Dropdown from './dropdown/dropdown';
import Radiocomp from './radiobutton/Radiocomp';
import Button from './button/button';
import AnimatedButton from './button/animatedbutton'

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  //<Button value="NUTAN" type="secondary" icon={<Icon name='cloud'/>}/>

  render(){
    return(
            <div>
              <Dropdown items={this.props.itemList}/>
              <Radiocomp items={this.props.itemList} />
              <Button label="Nutan" secondary={true}/>
              <AnimatedButton visible="see" hidden="hide"/>

            </div>
        );
  }

}

App.propTypes = { itemList: React.PropTypes.array.isRequired };
App.defaultProps = { itemList: ["aa","bb","cc","dd","ff","gg","hh","ii"] };

React.render( <App /> , document.body);
