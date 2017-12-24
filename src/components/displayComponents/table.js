import '../../assets/css/App.css';
import React, { Component } from 'react';
import { Table } from 'antd';

//import 'antd/dist/antd.css';

import css from 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];


class ComponentList extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default ComponentList;
