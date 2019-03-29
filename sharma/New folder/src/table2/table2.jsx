import './table2.css';
import React from 'react';

function template() {
  return (
    <div className="table-2">
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
