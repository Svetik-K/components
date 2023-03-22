import React from 'react';
import DateInput from './DateInput';
import Select from './Select';
import TextInput from './TextInput';

class Form extends React.Component {
  render() {
    return (
      <form>
        <TextInput fieldName="Name"></TextInput>
        <TextInput fieldName="Surname"></TextInput>
        <DateInput></DateInput>
        <Select></Select>
      </form>
    );
  }
}

export default Form;
