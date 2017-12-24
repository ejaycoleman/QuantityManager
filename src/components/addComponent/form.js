import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import React, { Component } from 'react';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

  render() {
    return (
      <Form layout="inline" >
        <FormItem>
            <Input placeholder="Name" />
        </FormItem>
        <FormItem>
            <Input type="number" placeholder="Quantity" />
        </FormItem>
        <FormItem>
            <Input type="number" placeholder="Part Number" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" >
            Add
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
