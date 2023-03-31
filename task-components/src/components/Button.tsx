import React from 'react';

type ButtonProps = {
  name: string;
  type?: string;
  children?: React.ReactNode;
  onClick?: (e: Event) => void;
};

const Button: React.FC<ButtonProps> = ({ name, ...props }) => {
  const className = `button button-${name}`;
  return <button className={className}>{props.children}</button>;
};

export default Button;
