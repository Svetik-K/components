import React from 'react';

type ButtonProps = {
  name: string;
  type?: string;
  children?: React.ReactNode;
  onClick?: (e: Event) => void;
};

class Button extends React.Component<ButtonProps> {
  render() {
    const className = `button button-${this.props.name}`;
    return <button className={className}>{this.props.children}</button>;
  }
}

export default Button;
