import React from 'react';
import template from './AntTable.jsx';

class AntTable extends React.Component {
  constructor() {
    super();

    this.fnClick = this.fnClick.bind(this);
    this.state = {
      editUserInfo: {}
    };
  }
  render() {
    return template.call(this);
  }

  getData = () => {
    debugger;
  };
  fnClick = () => {};
}

export default AntTable;
