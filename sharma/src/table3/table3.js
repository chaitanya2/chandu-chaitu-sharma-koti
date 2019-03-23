import React from 'react';
import template from './table3.jsx';
import { userInfo } from 'os';

class table3 extends React.Component {
  constructor() {
    super();
    this.fnChange = this.fnChange.bind(this);
    this.fnReg = this.fnReg.bind(this);
    this.state = {
      regDet: {},
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
        }
      ]
    };
  }

  fnChange = e => {
    debugger;
    this.setState({
      regDet: {
        ...this.state.regDet,
        [e.target.id]: e.target.value
      }
    });
  };
  fnReg = () => {
    debugger;
    window.alert(JSON.stringify(this.state.regDet));
    this.setState({
      usersInfo: [...this.state.usersInfo, this.state.regDet]
    });
  };

  render() {
    return (
      <div className="table-2">
        <div>
          <label>Enter your id</label>
          <br />
          <input type="text" id="id" onChange={this.fnChange} />
        </div>
        <label>Enter your name</label>
        <div>
          <input type="text" id="name" onChange={this.fnChange} />
        </div>
        <label>Enter your email</label>
        <div>
          <input type="text" id="email" onChange={this.fnChange} />
        </div>
        <label>Enter your city</label>
        <div>
          <input type="text" id="city" onChange={this.fnChange} />
        </div>
        <input type="button" value="submit" onClick={this.fnReg} />
        <table className="stable">
          <thead>
            {this.state.headers.map((v, i) => {
              return <th>{v}</th>;
            })}
          </thead>

          {this.state.usersInfo.map((o, i) => {
            return (
              <tr>
                {this.state.keys.map((k, i) => {
                  return <td>{o[k]}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default table3;
