import React from 'react';

type ButtonProps = {
  name: string;
  type?: string;
  children?: React.ReactNode;
};

class Button extends React.Component<ButtonProps> {
  render() {
    const className = `button-${this.props.name}`;
    return <button className={className}>{this.props.children}</button>;
  }
}

export default Button;
