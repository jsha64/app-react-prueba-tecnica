// components/Button.tsx
import React from 'react';

type ButtonProps = {
  place
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className: string;
};

export default function Button({ children, onClick, type, disabled = false, className }: ButtonProps) {
  return (
    <input type={type} onClick={onClick} disabled={disabled} className={className}  />
  );
}
