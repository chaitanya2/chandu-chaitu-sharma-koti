import React, { Component, } from 'react';
import { Table, Button, Tabs, Form, Input } from 'antd';
import "antd/dist/antd.css";
import Item from 'antd/lib/list/Item';


const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class App extends React.Component {

  state = {
    selectedRowKeys: [],
    loading: false,
    editUserInfo: {
      name:'',
      age:'',
      address:'',
    }
  };

  start = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,'selectedRows: ', selectedRows);
    this.setState({ editUserInfo:selectedRows[0] });
  }

  Onchange = (key, event) =>{debugger; let v=event.target.value;
    this.setState(prevState=>{
      
      this.state.editUserInfo={...prevState.editUserInfo,[key]:v};
    return {editUserInfo:this.state.editUserInfo};
    })
    }

  render() {
    
    const { loading, selectedRowKeys, editUserInfo } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    

    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8, }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        
        <Form className="login" key={columns.key}>
          {Object.keys(editUserInfo).map(item => {debugger;return(
            
            <Form.Item key={item} label={item}>
            
              <Input value={editUserInfo[item]} style={{ width: "200px" }} onChange={event=>this.Onchange(item,event)}/>
            
            </Form.Item>
          )})}
        </Form>
      </div>
    );
  }
}

export default App;