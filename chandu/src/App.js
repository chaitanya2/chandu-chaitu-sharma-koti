import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    rows: [{ id: "01", name: "chandra", mailid: "ccchandra@gmail.com", city: "hyd" },
    { id: "02", name: "sureh", mailid: "ccchandra@gmail.com", city: "hyd" },
    { id: "03", name: "raj", mailid: "raj@gmail.com", city: "knl" },
  {id:"04",name:"rajesh",mailid:"rajesh@gmail.com",city:"hyd"}]
  }

  onChange = event => {
    var length = [...this.state.rows];
    length.push(event.target.value)
    this.setState({ rows: length })
    console.log(length);
  }

  render() {
    return (
      <div>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>mail id</th>
          <th>city</th>
        </tr>
        {this.state.rows.map(item => <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.mailid}</td>
          <td>{item.city}</td>
        </tr>)}
        <input type = "text" value={this.state.id} onChange={event=>{var v=(event.target.value);this.setState({rows:v})}} />
         <button onClick={this.onChange}>save</button>
          </div>
        );
      }
    }
    
    export default App;
    
    
