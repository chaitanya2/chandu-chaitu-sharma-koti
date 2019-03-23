import React from 'react';
import template from './table2.jsx';

class table2 extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: ['id', 'name', 'email', 'city'],
      keys: ['id', 'name', 'email', 'city'],
      usersInfo: [
        {
          id: 1,
          name: 'shubham',
          email: 'shubham@gmail.com',
          city: 'indore'
        },
        {
          id: 2,
          name: 'Vinay',
          email: 'Vinay@gmail.com',
          city: 'hyd'
        },
        {
          id: 3,
          name: 'Durga',
          email: 'durga@gmail.com',
          city: 'mumbai'
        },
        {
          id: 3,
          name: 'Durga',
          email: 'durga@gmail.com',
          city: 'mumbai'
        }
      ]
    };
  }
  render() {
    return template.call(this);
  }
}

export default table2;
