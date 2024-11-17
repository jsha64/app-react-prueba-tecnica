// components/Input.tsx
import React from 'react';

type InputProps = {
  type?: 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className: string;
};

export default function Input({ type, value, onChange, placeholder, required, className}: InputProps) {
  return (
    <div className="space-y-4" >
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={className}
    />
    </div>
  );
}
