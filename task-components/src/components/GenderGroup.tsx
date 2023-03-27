import React from 'react';

type GenderGroupProps = {
  errorMessage: string;
};

class GenderGroup extends React.Component<GenderGroupProps> {
  radioMale: React.RefObject<HTMLInputElement>;
  radioFemale: React.RefObject<HTMLInputElement>;
  radioOther: React.RefObject<HTMLInputElement>;

  constructor(props: GenderGroupProps) {
    super(props);
    this.radioMale = React.createRef();
    this.radioFemale = React.createRef();
    this.radioOther = React.createRef();
  }

  getSelected = (): HTMLInputElement | null => {
    const inputStates = [this.radioMale.current, this.radioFemale.current, this.radioOther.current];
    return inputStates.find((input) => input?.checked) ?? null;
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <div className="gender">
        <p className="gender-title">Gender:*</p>
        <div className="gender-radios">
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" value="Male" name="gender" ref={this.radioMale} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" value="Female" name="gender" ref={this.radioFemale} />
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" value="Other" name="gender" ref={this.radioOther} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default GenderGroup;
