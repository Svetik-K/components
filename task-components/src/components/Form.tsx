import React from 'react';
import DateInput from './DateInput';
import Select from './Select';
import TextInput from './TextInput';
import '../styles/form.css';
import Button from './Button';
import FileUpload from './FileUpload';
import Gender from './Gender';
import AgreeCheck from './AgreeCheck';

class Form extends React.Component {
  handleSubmit() {
    console.log('frrrr');
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <h2 className="form-title">Fill in the form below</h2>
        <TextInput fieldName="Name" />
        <TextInput fieldName="Surname" />
        <DateInput />
        <Gender />
        <Select />
        <FileUpload />
        <AgreeCheck />
        <Button type="submit" name="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
