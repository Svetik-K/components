import React from 'react';
import { FormCardContent } from '../utils/types';
import '../styles/formCard.css';

type FormCardProps = {
  formData: FormCardContent;
};

class FormCard extends React.Component<FormCardProps> {
  state = {
    fileUrl: null,
  };

  componentDidMount(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ fileUrl: reader.result });
    };
    if (this.props.formData.file) {
      reader.readAsDataURL(this.props.formData.file);
    }
  }

  render() {
    const { name, surname, date, country, gender } = this.props.formData;
    const { fileUrl } = this.state;
    return (
      <div className="form-card">
        <h3 className="form-card-title">Personal card</h3>
        <div className="form-card-upper">
          {fileUrl && <img src={fileUrl} alt="avatar" className="form-card-image" />}
          <div>
            <p className="form-card-name">{name}</p>
            <p className="form-card-surname">{surname}</p>
            <p className="form-card-gender">{gender}</p>
          </div>
        </div>
        <p className="form-card-birthday">Birthday: {date}</p>
        <p className="form-card-country">Country: {country}</p>
      </div>
    );
  }
}

export default FormCard;
