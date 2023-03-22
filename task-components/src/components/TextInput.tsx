import React from 'react';

type TextInputProps = {
  fieldName?: string;
};

class TextInput extends React.Component<TextInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: TextInputProps) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    return (
      <div>
        <label>
          {this.props.fieldName}:
          <input type="text" ref={this.input} />
        </label>
      </div>
    );
  }
}

export default TextInput;
