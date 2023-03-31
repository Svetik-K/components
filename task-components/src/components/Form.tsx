import React, { useState } from 'react';
import '../styles/form.css';
import Button from './Button';
import countries from '../data/countries';
import { FormCardContent } from '../utils/types';
import { useForm } from 'react-hook-form';
import { validateTextField, validateBirthDate } from 'utils/helpers';

type FormProps = {
  onSubmit: (formData: FormCardContent) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCardContent>();
  const [isValid, setIsValid] = useState(false);

  const onFormSubmit = (data: FormCardContent) => {
    onSubmit(data);
    console.log(data);
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
        <input
          type="text"
          id="username"
          {...register('username', {
            required: 'Please enter your name',
            validate: (value) => validateTextField(value),
          })}
          placeholder="Elisabeth"
        />
        {errors.username?.type === 'required' && (
          <span className="error-message">{errors.username.message}</span>
        )}
        {errors.username?.type === 'validate' && (
          <span className="error-message">Your name should contain only letters</span>
        )}
      </div>
      <br />
      <div className="surname-input">
        <label htmlFor="user-surname">Surname:*</label>
        <input
          type="text"
          id="user-surname"
          {...register('surname', {
            required: 'Please enter your surname',
            validate: (value) => validateTextField(value),
          })}
          placeholder="Willson"
        />
        {errors.surname?.type === 'required' && (
          <span className="error-message">{errors.surname.message}</span>
        )}
        {errors.surname?.type === 'validate' && (
          <span className="error-message">Your surname should contain only letters</span>
        )}
      </div>
      <br />
      <div className="birth-input">
        <label htmlFor="birth-date">Date of birth:*</label>
        <input
          type="date"
          id="birth-date"
          {...register('birthday', {
            required: 'Please enter your date of birth',
            validate: (value) => validateBirthDate(value),
          })}
        />
        {errors.birthday?.type === 'required' && (
          <span className="error-message">{errors.birthday.message}</span>
        )}
        {errors.birthday?.type === 'validate' && (
          <span className="error-message">
            The birth date can not be more than the current date
          </span>
        )}
      </div>
      <br />
      <div className="countries">
        <p className="countries-label">Country:*</p>
        <select
          className="select-bar"
          {...register('country', { required: 'Please choose your country' })}
        >
          <option value="" key="choose">
            Choose Your country
          </option>
          {countriesList}
        </select>
        {errors.country && <span className="error-message">{errors.country.message}</span>}
      </div>
      <div className="gender">
        <p className="gender-title">Gender:*</p>
        <div className="gender-radios">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="Male"
            {...register('gender', { required: 'Please select a gender' })}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="Female"
            {...register('gender', { required: 'Please select a gender' })}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            value="Other"
            {...register('gender', { required: 'Please select a gender' })}
          />
        </div>
        {errors.gender?.type === 'required' && (
          <p className="error-message">{errors.gender.message}</p>
        )}
      </div>
      <div className="file-upload">
        <label htmlFor="user-image">Upload your profile image:*</label>
        <input
          type="file"
          id="user-image"
          {...register('image', { required: 'Please upload your profile image' })}
        />
        {errors.image && <p className="error-message">{errors.image.message}</p>}
      </div>
      <br />
      <div className="agreement">
        <div className="agreement-check">
          <input
            type="checkbox"
            id="agree-check"
            {...register('agreement', {
              required: 'Please check the box to agree to our Terms and Policy',
            })}
          />
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
