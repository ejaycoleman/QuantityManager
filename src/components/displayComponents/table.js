import '../../assets/css/App.css';
import React, { Component } from 'react';
import { Table } from 'antd';

//import 'antd/dist/antd.css';

import css from 'antd/dist/antd.css';

const dataSource = [{
  key: '1',
  name: '20mm Bolt',
  quantity: 12,
  partNumber: '199346'
}, {
  key: '2',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '3',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '4',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '5',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '6',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '7',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '8',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}, {
  key: '9',
  name: '35mm Bolt',
  quantity: 24,
  partNumber: '366289'
}
];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Quantity',
  dataIndex: 'quantity',
  key: 'quantity',
}, {
  title: 'PartNumber',
  dataIndex: 'partNumber',
  key: 'partNumber',
}];


class ComponentList extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }}/>
      </div>
    );
  }
}

export default ComponentList;
