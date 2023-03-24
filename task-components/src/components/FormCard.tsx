import React from 'react';
import { FormCardContent } from '../utils/types';

type FormCardProps = {
  formData: FormCardContent;
};

class FormCard extends React.Component<FormCardProps> {
  render() {
    const { name, surname, date, country, file } = this.props.formData;
    return (
      <div className="form-card">
        <p>{name}</p>
        <p>{surname}</p>
        <p>{date}</p>
        <p>{country}</p>
      </div>
    );
  }
}

export default FormCard;
