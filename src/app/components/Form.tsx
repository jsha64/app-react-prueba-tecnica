// components/Form.tsx
import React, { FormEvent, ReactNode } from 'react';

type FormProps = {
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
};

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <form onSubmit={onSubmit} className='flex flex-col w-[448px]'>
      {children}
    </form>
  );
}
