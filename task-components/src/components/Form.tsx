import React, { FormEvent, useState } from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';
import { FormCardContent, FormState } from '../utils/types';
import { validateForm } from '../utils/helpers';
import GenderGroup from './GenderGroup';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (formData: FormCardContent) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCardContent>();
  const [isValid, setIsValid] = useState(false);

  const onFormSubmit = (data: FormCardContent) => {
    onSubmit(data);
    setIsValid(true);
    setTimeout(() => {
      reset();
      setIsValid(false);
    }, 1500);
  };

  const countriesList = countries.map((country) => {
    return (
      <option value={country} key={country}>
        {country}
      </option>
    );
  });
  return (
    <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
      <h2 className="form-title">Fill in the form below</h2>
      <div className="name-input">
        <label htmlFor="username">Name:*</label>
        <input type="text" id="username" {...register('username')} placeholder="Elisabeth" />
        {errors.username && <span className="error-message">{errors.username.message}</span>}
      </div>
      <br />
      <div className="surname-input">
        <label htmlFor="user-surname">Surname:*</label>
        <input type="text" id="user-surname" {...register('surname')} placeholder="Willson" />
        {errors.surname && <span className="error-message">{errors.surname.message}</span>}
      </div>
      <br />
      <div className="birth-input">
        <label htmlFor="birth-date">Date of birth:*</label>
        <input type="date" id="birth-date" {...register('birthday')} />
        {errors.birthday && <span className="error-message">{errors.birthday.message}</span>}
      </div>
      <br />
      <div className="countries">
        <p className="countries-label">Country:*</p>
        <select className="select-bar" {...register('country')}>
          <option value="Choose Your country" key="choose">
            Choose Your country
          </option>
          {countriesList}
        </select>
        {errors.country && <span className="error-message">{errors.country.message}</span>}
      </div>
      {/* <GenderGroup errorMessage={errors.gender} ref={this.radioGroupRef}></GenderGroup> */}
      <div className="file-upload">
        <label htmlFor="user-image">Upload your profile image:*</label>
        <input type="file" id="user-image" {...register('image')} />
        {errors.image && <p className="error-message">{errors.image.message}</p>}
      </div>
      <br />
      <div className="agreement">
        <div className="agreement-check">
          <input type="checkbox" id="agree-check" {...register('agreement')} />
          <label htmlFor="agree-check">
            I have read the Terms and Policy and consent to the use of my personal data*
          </label>
        </div>
        {errors.agreement && <p className="error-message">{errors.agreement.message}</p>}
      </div>
      <Button name="submit">Submit</Button>
      {isValid && <div className="submitted-message">Your personal data have been saved</div>}
    </form>
  );
};

export default Form;
