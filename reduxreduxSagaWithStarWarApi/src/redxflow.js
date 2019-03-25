import React from 'react';
import { Table, Input, Form, Button } from 'antd';
import { connect } from 'react-redux';
import { EditData, addNewData, addBackendData } from './actions';

let editUserInfo = {};
var buttonStyle = {
  textAlign: 'right'
};
class Redxflow extends React.Component {
  constructor(props) {
    super(props);
    this.fnChange = this.fnChange.bind(this);
    this.state = {
      editUserInfo: {},
      addData: {
        key: '',
        name: '',
        age: '',
        address: '',
        email: ''
      },
      addingData: false,

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
  fnChange = (key,item, e) => {
    debugger;
    let v = e.target.value;
    this.setState(prevState => {
      editUserInfo = { ...prevState[key], [item]: v };
      return { [key]: editUserInfo };
    });
  };

  fnAddData = () => {
    this.setState({ addingData: true });
  };

  addBackendData = () => {
    this.props.dispatch(addBackendData())
  }

  addData = () => {
    this.props.dispatch(addNewData({ addData: this.state.addData }));
  };

  fnClick = () => {
    this.props.dispatch(EditData({ editUserInfo: this.state.editUserInfo }));

    // debugger;
    // let editUserInfo = { ...this.state.editUserInfo };
    // let Operation2 = [...this.props.dataSource];
    // for (var item in Operation2) {
    //   debugger;
    //   if (Operation2[item].key === editUserInfo.key) {
    //     debugger;
    //     console.log('1 if start ');
    //     Operation2[item] = editUserInfo;
    //     console.log('1 if end');
    //   }
    //   console.log('this is Operation2 ' + Operation2);
    // }

    // // function add(Operation2, mykey, editUserInfo) {
    // //   debugger;
    // //   const found = Operation2.some(el => el.key === mykey);
    // //   if (!found) {
    // //     let newKey = Operation2.length + 1;
    // //     window.alert('New key Genrated for new data NEW KEY IS::==> ' + newKey);
    // //     editUserInfo.key = newKey.toString();
    // //     debugger;
    // //     let pp = Object.values(editUserInfo).every(v => {
    // //       return v !== '';
    // //     });
    // //     window.alert(pp);
    // //     if (pp) {
    // //       Operation2.push(editUserInfo);
    // //     }
    // //     window.alert(JSON.stringify(editUserInfo));
    // //   }
    // //   return Operation2;
    // // }
    // // add(Operation2, editUserInfo.key, editUserInfo);

    // this.setState({
    //   dataSource: Operation2
    // });
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
    console.log(this.props.starwardata)
    return (
      <div className="ant-table">
        <h1>AntTable</h1>
        <div className="App">
          <Table
            rowSelection={rowSelection}
            dataSource={this.props.dataSource}
            columns={this.state.columns}
          />
          <div>
            <div style={buttonStyle}>
              <Button type="primary" onClick={this.fnAddData}>
                Enter New Data
              </Button>
            </div>

            {Object.keys(this.state.editUserInfo).map(item => {
              return (
                <div>
                  <Form>
                    {item !== 'key' && (
                      <Form.Item label={item}>
                        <Input
                          value={this.state.editUserInfo[item]}
                          onChange={event => this.fnChange("editUserInfo",item, event)}
                        />
                      </Form.Item>
                    )}
                  </Form>
                </div>
              );
            })}
            {Object.keys(this.state.editUserInfo) &&
            Object.keys(this.state.editUserInfo).length > 0 ? (
              <input type="button" value="submit" onClick={this.fnClick} />
            ) : null}
            {this.state.addingData ? (
              <div>
                {this.state.addingData &&
                  Object.keys(this.state.addData).map(item => {
                    debugger;
                    return (
                      <div>
                        <Form>
                          {item !== 'key' && (
                            <Form.Item label={item}>
                              <Input
                                value={this.state.addData[item]}
                                onChange={event => this.fnChange("addData",item, event)}
                              />
                            </Form.Item>
                          )}
                        </Form>
                      </div>
                    );
                  })}
                <button onClick={this.addData}>add new data</button>
              </div>
            ) : null}

            {/* <input
              type="text"
              id="name"
              value={this.state.editUserInfo.name}
              onChange={this.fnChange}
            /> */}
          </div>
          <button onClick={this.addBackendData} >saga request</button>
        </div>
      </div>
    );
  }
}

Redxflow.defaultProps = {};

const mapStateToProps = (state, props) => {
  const { firstReducer } = state;debugger
  return {
    dataSource: firstReducer.dataSource,
    starwardata: firstReducer.starwardata || {}
  };
};

export default connect(mapStateToProps)(Redxflow);
