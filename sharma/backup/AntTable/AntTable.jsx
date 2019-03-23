import './AntTable.css';
import React from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { Carousel } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
    console.log(selectedRowKeys);
    console.log(selectedRows);
    console.log(selectedRows[0].name);
    console.log(selectedRows[0].age);
    console.log(selectedRows[0].address);
    console.log(selectedRows[0].email);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};

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
function template() {
  return (
    <div className="ant-table">
      <h1>AntTable</h1>
      <div className="App">
        <div>
          <input type="text" id="name" onChange={this.fnChange} />
          <input type="text" id="age" onChange={this.fnChange} />
          <input type="text" id="address" onChange={this.fnChange} />
          <input type="text" id="email" onChange={this.fnChange} />
          <input type="button" value="submit" onClick={this.fnClick} />
        </div>

        <Table
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns1}
        />
      </div>
    </div>
  );
}
function onChange(a, b, c) {
  console.log(a, b, c);
}

export default template;
