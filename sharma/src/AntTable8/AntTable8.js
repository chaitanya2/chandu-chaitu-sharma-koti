import React from 'react';
import { Table, Input, Form } from 'antd';
let editUserInfo = {};
class AntTable8 extends React.Component {
  constructor(props) {
    super(props);
    this.fnChange = this.fnChange.bind(this);
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
          name: 'ONE',
          age: 32,
          address: '10 Downing Street',
          email: 'shubham@gmail.com'
        },

        {
          key: '2',
          name: 'TWO',
          age: 32,
          address: '10 Downing Street',
          email: 'shubham@gmail.com'
        },
        {
          key: '3',
          name: 'THREE',
          age: 32,
          address: '10 Downing Street',
          email: 'shubham@gmail.com'
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
  fnChange = (item, e) => {
    debugger;
    let v = e.target.value;
    this.setState(prevState => {
      editUserInfo = { ...prevState.editUserInfo, [item]: v };
      return { editUserInfo: editUserInfo };
    });
  };

  fnClick = () => {
    debugger;
    let editUserInfo = { ...this.state.editUserInfo };
    let Operation2 = [...this.state.dataSource];
    for (var item in Operation2) {
      debugger;
      if (Operation2[item].key === editUserInfo.key) {
        debugger;
        console.log('1 if start ');
        Operation2[item] = editUserInfo;
        console.log('1 if end');
      }
    }

    function add(Operation2, mykey) {
      debugger;
      const found = Operation2.some(el => el.key === mykey);
      if (!found) {
        let newKey = Operation2.length + 1;
        window.alert('New key Genrated for new data NEW KEY IS::==> ' + newKey);
        editUserInfo.key = newKey.toString();
        debugger;
        let pp = Object.values(editUserInfo).every(v => {
          return v !== '';
        });
        window.alert(pp);
        if (pp) {
          Operation2.push(editUserInfo);
        }
        window.alert(JSON.stringify(editUserInfo));
      }
      return Operation2;
    }
    add(Operation2, editUserInfo.key);

    this.setState({
      dataSource: Operation2
    });
  };

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('start');
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        );
        console.log('end');
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
          <Table
            rowSelection={rowSelection}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
          />
          <div>
            {Object.keys(this.state.editUserInfo).map(item => {
              debugger;
              return (
                <div>
                  <Form>
                    {item !== 'key' && (
                      <Form.Item label={item}>
                        <Input
                          value={this.state.editUserInfo[item]}
                          onChange={event => this.fnChange(item, event)}
                        />
                      </Form.Item>
                    )}
                  </Form>
                </div>
              );
            })}

            {/* <input
              type="text"
              id="name"
              value={this.state.editUserInfo.name}
              onChange={this.fnChange}
            /> */}
            <input type="button" value="submit" onClick={this.fnClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default AntTable8;
