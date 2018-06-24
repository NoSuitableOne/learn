import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import '../App.css';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;


class HorizontalLoginForm extends Component {
  handleSubmit = () => {
    this.props.form.validateFields(
      (err, value) => {
        console.log('submit');
        console.log(err);
        console.log(value);
      }
    );
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  onCheck(value) {
    console.log(value);
  }

  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const checkOptions = [
      {
        label: 'Apple',
        value: 'apple'
      },
      {
        lable: 'Samsung',
        value: 'samsung'
      },
      {
        label: 'Huawei',
        value: 'huawei'
      }
    ];
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 }
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 }
    };

    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const checkboxError = isFieldTouched('checkbox') && getFieldError('checkbox');

    return (
      <Form layout="vertical" onSubmit={()=>this.handleSubmit()}>
        <FormItem
          {...formItemLayout}
          label="username"
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="password"
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="checkbox"
          validateStatus={checkboxError ? 'error' : ''}
          help={checkboxError || ''}
        >
          {getFieldDecorator('checkbox', {
            rules: [{required: true, message: 'checkbox'}],
            initialValue: ['apple']
          })(
            <CheckboxGroup options={checkOptions} onChange={() => {this.onCheck()}} />
          )}
        </FormItem>
        <FormItem
          {...formTailLayout}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => this.handleSubmit()}
            disabled={this.hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);


const example = () => {
  return (
    <div className="App">
      <WrappedHorizontalLoginForm />
      <hr />
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        ui: state.ui
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


const Example = connect(
    mapStateToProps,
    mapDispatchToProps
)(example);

export default Example;
