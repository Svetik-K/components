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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: SubmitEvent) {
    console.log(this.nameInput.current?.value);
    e.preventDefault();
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
      <form className="form" onSubmit={() => this.handleSubmit}>
        <h2 className="form-title">Fill in the form below</h2>
        <div className="name-input">
          <label htmlFor="username">*Name:</label>
          <input type="text" id="username" ref={this.nameInput} placeholder="Mike" required />
        </div>
        <br />
        <div className="surname-input">
          <label htmlFor="user-surname">*Surname:</label>
          <input
            type="text"
            id="user-surname"
            ref={this.surnameInput}
            placeholder="Willson"
            required
          />
        </div>
        <br />
        <div className="birth-input">
          <label htmlFor="birth-date">Date of birth:</label>
          <input type="date" id="birth-date" ref={this.dateInput} />
        </div>
        <br />
        <div className="countries">
          <select ref={this.countryInput} className="select-bar">
            <option value="Choose Your country" key="choose">
              Choose Your country
            </option>
            {countriesList}
          </select>
        </div>
        <div className="gender-radios">
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" value="Male" name="gender" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" value="Female" name="gender" />
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" value="Other" name="gender" />
        </div>
        <div className="file-upload">
          <label htmlFor="user-image">Upload your foto:</label>
          <input type="file" id="user-image" ref={this.fileUpload} />
        </div>
        <br />
        <div className="agreement">
          <input type="checkbox" required />
          <span>I have read the document and agree to the use of my personal data</span>
        </div>
        <Button type="submit" name="submit">
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
