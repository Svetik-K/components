import React, { FormEvent } from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';
import { FormCardContent, FormState } from '../utils/types';
import { validateForm } from '../utils/helpers';
import GenderGroup from './GenderGroup';

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
  radioGroupRef: React.RefObject<GenderGroup>;
  checkboxRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileUpload = React.createRef();
    this.countryInput = React.createRef();
    this.radioGroupRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.formRef = React.createRef();
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
    const genderGroup = this.radioGroupRef.current as GenderGroup;
    const selectedRadio = genderGroup.getSelected();
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
      this.setState({ isValid: true });
      setTimeout(() => {
        this.setState({ isValid: false });
        this.formRef.current?.reset();
        this.setState({ errors: {} });
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
      <form className="form" onSubmit={this.handleFormSubmit} ref={this.formRef}>
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
        <GenderGroup errorMessage={errors.gender} ref={this.radioGroupRef}></GenderGroup>
        <div className="file-upload">
          <label htmlFor="user-image">Upload your profile image:*</label>
          <input type="file" id="user-image" ref={this.fileUpload} />
          {errors.file && <p className="error-message">{errors.file}</p>}
        </div>
        <br />
        <div className="agreement">
          <div className="agreement-check">
            <input type="checkbox" id="agree-check" ref={this.checkboxRef} />
            <label htmlFor="agree-check">
              I have read the Terms and Policy and consent to the use of my personal data*
            </label>
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
