import React from 'react';
import { Table } from 'antd';
let editUserInfo = {};
class AntTable4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUserInfo: {
        key: '',
        name: '',
        age: '',
        address: '',
        email: ''
      },
      dataSource: [
        {
          key: '1',
          name: 'Mike0',
          age: 32,
          address: '10 Downing Street',
          email: 'shubham@gmail.com'
        },
        {
          key: '2',
          name: 'shubham1',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '3',
          name: 'shubham2',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '4',
          name: 'shubham3',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '5',
          name: 'shubham4',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        }
      ],
      columns: [
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
      ]
    };
  }

  fnClick = () => {
    // debugger;
    let editUserInfo = { ...this.state.editUserInfo };
    let Operation2 = [...this.state.dataSource];
    for (var item in Operation2) {
      debugger;
      if (Operation2[item].key === editUserInfo.key) {
        debugger;
        Operation2[item] = editUserInfo;
      }
    }
    console.log(Operation2);
    this.setState({
      dataSource: Operation2
    });
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
                this.setState(prevState => {
                  editUserInfo = { ...prevState.editUserInfo, name: v };
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
                  editUserInfo = { ...prevState.editUserInfo, age: v };
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
                  editUserInfo = { ...prevState.editUserInfo, address: v };
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
                  editUserInfo = { ...prevState.editUserInfo, email: v };
                  return { editUserInfo: editUserInfo };
                });
              }}
            />
            <input type="button" value="submit" onClick={this.fnClick} />
          </div>

          <Table
            rowSelection={rowSelection}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
          />
        </div>
      </div>
    );
  }
}

export default AntTable4;
