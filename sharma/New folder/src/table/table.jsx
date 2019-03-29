import './table.css';
import React from 'react';

function template() {
  return (
    <div className="table">
      <div>
        <table className="stable">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email_id</th>
            <th>City</th>
          </thead>
          <tr>
            <td>1</td>
            <td>Shubham</td>
            <td>shubham@gmail.com</td>
            <td>Indore</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vinay</td>
            <td>vinay@gmail.com</td>
            <td>Hyderabad</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shankar</td>
            <td>shankar@gmail.com</td>
            <td>Patna</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default template;
