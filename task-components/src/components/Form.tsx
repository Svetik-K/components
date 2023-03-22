import React from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';

class Form extends React.Component {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileUpload: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileUpload = React.createRef();
    this.countryInput = React.createRef();
  }
  handleSubmit() {
    console.log('frrrr');
  }
  render() {
    const countriesList = countries.map((country) => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <h2 className="form-title">Fill in the form below</h2>
        <label className="name-input">
          Name:
          <input type="text" ref={this.nameInput} />
        </label>
        <br />
        <label className="surname-input">
          Surname:
          <input type="text" ref={this.surnameInput} />
        </label>
        <br />
        <label className="birth-input">
          Date of birth:
          <input type="date" ref={this.dateInput} />
        </label>
        <br />
        <select ref={this.countryInput} className="select-bar">
          {countriesList}
        </select>
        <div className="gender-radios">
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <label className="file-upload">
          Upload your foto:
          <input type="file" ref={this.fileUpload} />
        </label>
        <br />
        <Button type="submit" name="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
