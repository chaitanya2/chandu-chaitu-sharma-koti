import './table3.css';
import React from 'react';

function template() {
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

export default template;
