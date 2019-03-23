import React from 'react';
import { Table } from 'antd';
let editUserInfo = {};
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    email: 'shubham@gmail.com'
  },
  {
    key: '2',
    name: 'shubham',
    age: 25,
    address: '20 Downing Street',
    email: 'shubham2@gmail.com'
  }
];

const columns1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }
];

class AntTable extends React.Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.fnClick = this.fnClick.bind(this);
    this.state = {
      editUserInfo: []
    };
  }

  getData = b => {
    debugger;
    const a = b;
    console.log(a);
  };

  fnClick = () => {
    window.alert(JSON.stringify(this.editUserInfo));
  };

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        );
        this.setState({ editUserInfo: selectedRows[0] });
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name
      }),
      type: 'radio'
    };
    return (
      <div className="ant-table">
        <h1>AntTable</h1>
        <div className="App">
          <div>
            <input type="text" id="name" value={this.state.editUserInfo.name} />
            <input type="text" id="age" value={this.state.editUserInfo.age} />
            <input
              type="text"
              id="address"
              value={this.state.editUserInfo.address}
            />
            <input
              type="text"
              id="email"
              value={this.state.editUserInfo.email}
            />
            <input type="button" value="submit" onClick={this.fnClick} />
          </div>

          <Table
            rowSelection={rowSelection}
            dataSource={dataSource}
            columns={columns1}
          />
          {this.getData}
        </div>
      </div>
    );
  }
}

export default AntTable;
