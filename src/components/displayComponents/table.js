import '../../assets/css/App.css';
import React, { Component } from 'react';
import { Table, Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

//import 'antd/dist/antd.css';

var filePathName;

const loadJsonFile = require('load-json-file');
var jsonfile = require('jsonfile')


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
  title: 'Drawing Name',
  dataIndex: 'drawingName',
  key: 'drawingName',
}];


class ComponentList extends React.Component {
  constructor(props: any)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.displayTable = this.displayTable.bind(this);
        this.displayForm = this.displayForm.bind(this);

        this.submitNewComponent = this.submitNewComponent.bind(this);

        this.state = {
          fileSelected: false,
          fileData: [],
          title: 'M10 Full Nut',
          quantity: 0,
          drawingName: ''
        };


        this.handleChange = this.handleChange.bind(this);

    }

    handleFileChange(selectorFiles: FileList)
    {
        filePathName = selectorFiles[0].path;
        this.setState({fileSelected: true});

        loadJsonFile(selectorFiles[0].path).then(json => {
            this.setState({fileData: json});
        });

    }

    handleChange(event) {

      this.setState({[event.target.id]: event.target.value});
    }

    findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {

                return i;
            }
        }
        console.log(value);
        console.log(array[i][attr]);
        return -1;
    }

    findInDrawingList(file, indexOfComponent) {
      var drawingArray = file[indexOfComponent].drawingName.split(", ");
      for (var i = 0; i < drawingArray.length; i++) {
        if (drawingArray[i] == this.state.drawingName) {
          return false;
        }
      }
      return true;
    }

    submitNewComponent(event) {
      console.log("exectued");
      console.log("values: ", this.state.title, this.state.quantity);
      event.preventDefault();

      // if name exists
      // if drawing exists
      var fileContents = this.state.fileData;

      var indexOfComponent = this.findWithAttr(fileContents, "name", this.state.title);
      console.log(fileContents);

      if (this.indexOfComponent == -1) {
        fileContents.push({key: fileContents.length+1, name: this.state.title, drawingName: this.state.drawingName, quantity: this.state.quantity});

      } else {
        console.log(fileContents[indexOfComponent]);
        console.log("index: "+indexOfComponent);

        fileContents[indexOfComponent].quantity = parseInt(fileContents[indexOfComponent].quantity);
        fileContents[indexOfComponent].quantity += parseInt(this.state.quantity);


        if (this.findInDrawingList(fileContents, indexOfComponent)) {
          fileContents[indexOfComponent].drawingName += ", "+ this.state.drawingName;
        }
      }

      this.setState({"fileData": fileContents});
      jsonfile.writeFile(filePathName, fileContents, {spaces: 2}, function(err) {
        console.error(err)
      })
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

    displayForm() {
      if (this.state.fileSelected) {
        return (
          <form onSubmit={this.submitNewComponent}>
            <label>
              Drawing Name:
              <input type="text" value={this.state.drawingName} onChange={this.handleChange} id="drawingName" />
            </label>
            <label>
              Description:
              <select value={this.state.title} onChange={this.handleChange} id="title">
                <option value="M10 Full Nut">M10 Full Nut</option>
                <option value="M10 Half Nut">M10 Half Nut</option>
                <option valye="M10 Nyloc Nut">M10 Nyloc Nut</option>
                <option value="M10 Plain Washer">M10 Plain Washer</option>
              </select>
            </label>
            <label>
              Quantity:
              <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } 
    }

  render() {
    return (
      <div>

        <br />
        <input type="file" onChange={ (e) => this.handleFileChange(e.target.files) } />
        { this.displayTable() }
        <br />
        { this.displayForm() }

      </div>
    );
  }
}

export default ComponentList;
