'use strict';
import React from 'react';
import Dropdown from './dropdown/dropdown';
import Radiocomp from './radiobutton/Radiocomp';
import Button from './button/button';
import AnimatedButton from './button/animatedbutton';
import Icon from './icon/icon';

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
              <Button label={<Icon name="student"/>}/>
              <AnimatedButton vertical={true} visible="see" hidden={<Icon name="student"/>}/>
              <Icon name="student"/>
            </div>
        );
  }

}

App.propTypes = { itemList: React.PropTypes.array.isRequired };
App.defaultProps = { itemList: ["aa","bb","cc","dd","ff","gg","hh","ii"] };

React.render( <App /> , document.body);
