import React from 'react';
import { Table } from 'antd';
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
class AntTable2 extends React.Component {
  constructor() {
    super();
    this.fnClick = this.fnClick.bind(this);
    this.state = {
      editUserInfo: {}
    };
  }

  fnClick = () => {
    window.alert(JSON.stringify(this.state.editUserInfo));
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
      // With the help of type property antTable we can change the checkbox to radio.
    };
    return (
      <div className="ant-table">
        <h1>AntTable</h1>
        <div className="App">
          <div>
            <input
              type="text"
              id="name"
              value={this.state.editUserInfo.name}
              onChange={e => {
                let v = e.target.value;
                // this.setState({name:v}) we can not do like this.
                this.setState(prevState => {
                  let editUserInfo = { ...prevState.editUserInfo, name: v };
                  return { editUserInfo: editUserInfo };
                });
              }}
            />
            <input
              type="text"
              id="age"
              value={this.state.editUserInfo.age}
              onChange={e => {
                let v = e.target.value;
                this.setState(prevState => {
                  let editUserInfo = { ...prevState.editUserInfo, age: v };
                  return { editUserInfo: editUserInfo };
                });
              }}
            />
            <input
              type="text"
              id="address"
              value={this.state.editUserInfo.address}
              onChange={e => {
                let v = e.target.value;
                this.setState(prevState => {
                  let editUserInfo = { ...prevState.editUserInfo, address: v };
                  return { editUserInfo: editUserInfo };
                });
              }}
            />
            <input
              type="text"
              id="email"
              value={this.state.editUserInfo.email}
              onChange={e => {
                let v = e.target.value;
                this.setState(prevState => {
                  let editUserInfo = { ...prevState.editUserInfo, email: v };
                  return { editUserInfo: editUserInfo };
                });
              }}
            />
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
}

export default AntTable2;
