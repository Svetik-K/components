import React from 'react';

class DateInput extends React.Component {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return (
      <div>
        <label>
          Date of birth:
          <input type="date" ref={this.input} />
        </label>
      </div>
    );
  }
}

export default DateInput;
