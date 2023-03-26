import React, { FormEvent } from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';
import { FormCardContent, FormState } from '../utils/types';
import { validateForm } from '../utils/helpers';

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
  radioGroupRef: React.RefObject<HTMLDivElement>;
  checkboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileUpload = React.createRef();
    this.countryInput = React.createRef();
    this.radioGroupRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      errors: {
        name: '',
        surname: '',
        date: '',
        country: '',
        gender: '',
        file: '',
        agreement: '',
      },
      isValid: false,
    };
  }

  handleFormSubmit(e: FormEvent<HTMLFormElement>): void {
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
    const genderGroup = this.radioGroupRef.current as HTMLDivElement;
    const selectedRadio = genderGroup.querySelector<HTMLInputElement>(
      'input:checked'
    ) as HTMLInputElement;
    const gender = selectedRadio?.value || '';
    const file = curFileUpload.files && curFileUpload.files[0];
    const agreementCheckbox = this.checkboxRef.current as HTMLInputElement;
    const agreement = agreementCheckbox.checked;

    const errors = validateForm(name, surname, date, country, gender, file, agreement);
    this.setState({ errors });

    if (
      !errors.name &&
      !errors.surname &&
      !errors.date &&
      !errors.country &&
      !errors.gender &&
      !errors.file &&
      !errors.agreement
    ) {
      this.props.onSubmit({ name, surname, date, country, gender, file });
      console.log(file);
      this.setState({ isValid: true });
      document.body.style.pointerEvents = 'none';
      setTimeout(() => {
        this.setState({ isValid: false });
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
        if (selectedRadio) {
          selectedRadio.checked = false;
        }
        if (curFileUpload) {
          curFileUpload.value = '';
        }
        if (agreementCheckbox) {
          agreementCheckbox.checked = false;
        }
        this.setState({ errors: {} });
        document.body.style.pointerEvents = '';
      }, 2000);
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
          <label htmlFor="username">Name:*</label>
          <input type="text" id="username" ref={this.nameInput} placeholder="Elisabeth" />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <br />
        <div className="surname-input">
          <label htmlFor="user-surname">Surname:*</label>
          <input type="text" id="user-surname" ref={this.surnameInput} placeholder="Willson" />
          {errors.surname && <span className="error-message">{errors.surname}</span>}
        </div>
        <br />
        <div className="birth-input">
          <label htmlFor="birth-date">Date of birth:*</label>
          <input type="date" id="birth-date" ref={this.dateInput} />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        <br />
        <div className="countries">
          <p className="countries-label">Country:*</p>
          <select ref={this.countryInput} className="select-bar">
            <option value="Choose Your country" key="choose">
              Choose Your country
            </option>
            {countriesList}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>
        <div className="gender">
          <p className="gender-title">Gender:*</p>
          <div className="gender-radios" ref={this.radioGroupRef}>
            <label htmlFor="male">Male</label>
            <input type="radio" id="male" value="Male" name="gender" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="Female" name="gender" />
            <label htmlFor="other">Other</label>
            <input type="radio" id="other" value="Other" name="gender" />
          </div>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>
        <div className="file-upload">
          <label htmlFor="user-image">Upload your profile image:*</label>
          <input type="file" id="user-image" ref={this.fileUpload} />
          {errors.file && <p className="error-message">{errors.file}</p>}
        </div>
        <br />
        <div className="agreement">
          <div className="agreement-check">
            <input type="checkbox" ref={this.checkboxRef} />
            <span>
              I have read the Terms and Policy and consent to the use of my personal data*
            </span>
          </div>
          {errors.agreement && <p className="error-message">{errors.agreement}</p>}
        </div>
        <Button name="submit">Submit</Button>
        {this.state.isValid && (
          <div className="submitted-message">Your personal data have been saved</div>
        )}
      </form>
    );
  }
}

export default Form;
