import React, { FormEvent } from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';
import { FormCardContent, FormState } from '../utils/types';
import validateForm from '../utils/helpers';

type FormProps = {
  onSubmit: (formData: FormCardContent) => void;
};

class Form extends React.Component<FormProps> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileUpload: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  state: FormState;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileUpload = React.createRef();
    this.countryInput = React.createRef();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      errors: {
        name: '',
        surname: '',
        date: '',
        country: '',
        file: '',
      },
    };
  }

  handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const curNameInput = this.nameInput.current as HTMLInputElement;
    const name = curNameInput.value;
    const curSurnameInput = this.surnameInput.current as HTMLInputElement;
    const surname = curSurnameInput.value;
    const curDateInput = this.dateInput.current as HTMLInputElement;
    const date = curDateInput.value;
    const curCountryInput = this.countryInput.current as HTMLSelectElement;
    const country = curCountryInput.value;
    const curFileUpload = this.fileUpload.current as HTMLInputElement;
    const file = curFileUpload.files && curFileUpload.files[0];

    const errors = validateForm(name, surname, date, country, file);
    if (!errors.name && !errors.surname && !errors.date && !errors.country && !errors.file) {
      this.props.onSubmit({ name, surname, date, country, file });
      if (curNameInput) {
        curNameInput.value = '';
      }
      if (curSurnameInput) {
        curSurnameInput.value = '';
      }
      if (curDateInput) {
        curDateInput.value = '';
      }
      if (curCountryInput) {
        curCountryInput.value = 'Choose Your country';
      }
      if (curFileUpload) {
        curFileUpload.value = '';
      }
      this.setState({ errors: {} });
    }
  }

  render() {
    const countriesList = countries.map((country) => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });
    const { errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <h2 className="form-title">Fill in the form below</h2>
        <div className="name-input">
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" ref={this.nameInput} placeholder="Mike" />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <br />
        <div className="surname-input">
          <label htmlFor="user-surname">Surname:</label>
          <input type="text" id="user-surname" ref={this.surnameInput} placeholder="Willson" />
          {errors.surname && <span className="error-message">{errors.surname}</span>}
        </div>
        <br />
        <div className="birth-input">
          <label htmlFor="birth-date">Date of birth:</label>
          <input type="date" id="birth-date" ref={this.dateInput} />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        <br />
        <div className="countries">
          <p className="countries-label">Country:</p>
          <select ref={this.countryInput} className="select-bar">
            <option value="Choose Your country" key="choose">
              Choose Your country
            </option>
            {countriesList}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>
        <p className="gender-title">Gender:</p>
        <div className="gender-radios">
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" value="Male" name="gender" />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" value="Female" name="gender" />
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" value="Other" name="gender" />
        </div>
        <div className="file-upload">
          <label htmlFor="user-image">Upload your profile image:</label>
          <input type="file" id="user-image" ref={this.fileUpload} />
          {errors.file && <span className="error-message">{errors.file}</span>}
        </div>
        <br />
        <div className="agreement">
          <input type="checkbox" />
          <span>I have read the agreement and consent to the use of my personal data</span>
        </div>
        <Button name="submit">Submit</Button>
      </form>
    );
  }
}

export default Form;
