import '../../assets/css/App.css';
import React, { Component } from 'react';
import { Table, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

//import 'antd/dist/antd.css';


const loadJsonFile = require('load-json-file');


import css from 'antd/dist/antd.css';

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
  constructor(props: any)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.displayTable = this.displayTable.bind(this);

        this.logSomething = this.logSomething.bind(this);

        this.state = {
          fileSelected: false,
          fileData: [],
          title: '',
          quantity: 0,
          partNumber: 0
        };


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(selectorFiles: FileList)
    {
        console.log(selectorFiles[0].path);
        this.setState({fileSelected: true});

        loadJsonFile(selectorFiles[0].path).then(json => {
            this.setState({fileData: json});
        });

    }


    handleChange(event) {
      this.setState({[event.target.id]: event.target.value});
    }

    logSomething(event) {
      console.log(this.state.title, this.state.quantity, this.state.partNumber);
      event.preventDefault();
    }


    displayTable() {
      if (this.state.fileSelected) {
        return (
          <div>
            <Table dataSource={this.state.fileData} columns={columns} pagination={{ pageSize: 5 }}/>

          </div>
        );
      } else {
        return <h1>Please select a file</h1>;
      }
    }

  render() {
    return (
      <div>

        <input type="file" onChange={ (e) => this.handleChange(e.target.files) } />
        { this.displayTable() }
        <br />
        <form onSubmit={this.logSomething}>
          <label>
            title:
            <input type="text" value={this.state.title} onChange={this.handleChange} id="title" />
          </label>
          <label>
            quantity:
            <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
          </label>
          <label>
            part number:
            <input type="number" value={this.state.partNumber} onChange={this.handleChange} id="partNumber" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default ComponentList;
