import React from 'react';
import { Table } from 'antd';
import Operation from 'antd/lib/transfer/operation';
let editUserInfo = {};
class AntTable3 extends React.Component {
  constructor() {
    super();
    this.fnClick = this.fnClick.bind(this);
    this.state = {
      editUserInfo: {},
      dataSource: [
        {
          key: '1',
          name: 'Mike1',
          age: 32,
          address: '10 Downing Street',
          email: 'shubham@gmail.com'
        },
        {
          key: '2',
          name: 'shubham2',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '3',
          name: 'shubham3',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '4',
          name: 'shubham4',
          age: 25,
          address: '20 Downing Street',
          email: 'shubham2@gmail.com'
        },
        {
          key: '5',
          name: 'shubham5',
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
    debugger;
    // window.alert(JSON.stringify(this.state.editUserInfo));
    let key = this.state.editUserInfo.key;
    // window.alert(key);
    let Operation2 = [...this.state.dataSource];
    // window.alert('op2' + JSON.stringify(Operation2));
    debugger;

    var lucky = Operation2.filter(function(obj) {
      return obj.key !== key;
    });

    // window.alert(JSON.stringify(lucky));
    this.setState({
      dataSource: lucky
    });
    // let index = parseInt(this.state.editUserInfo.key) - 1;

    // window.alert(index);
    // window.alert(JSON.stringify(this.state.dataSource[i - 1]));
    // window.alert(JSON.stringify('Before'));
    // window.alert(JSON.stringify(this.state.dataSource));
    // let p = this.state.dataSource[index];
    // // window.alert(JSON.stringify(p));
    // let Operation = [...this.state.dataSource];
    // Operation.splice(index, 1);
    // debugger;
    // this.setState({
    //   dataSource: Operation
    // });
    // window.alert(JSON.stringify(this.state.dataSource));
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

export default AntTable3;
