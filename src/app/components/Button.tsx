// components/Button.tsx
import React from 'react';

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type: "submit" | "button"
  disabled?: boolean;
  className: string;
};

export default function Button({ children, onClick, type, disabled = false, className, title }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className} title={title}>
        Enviar
    </button>
  );
}
