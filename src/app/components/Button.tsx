// components/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "submit" | "button"
  disabled?: boolean;
  className: string;
};

export default function Button({ children, onClick, type, disabled = false, className }: ButtonProps) {
  return (
    <div className='flex justify-center w-full'>
      <button type={type} onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    </div>
  );
}
