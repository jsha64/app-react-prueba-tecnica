"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Form from '@/app/components/Form';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError(data.error || "Error desconocido");
    }
  };

  return (
    <div className='flex flex-row w-[1440px] h-[900px]'>
        <div className='flex bg-[#FF6752] w-[50%] h-full justify-center items-center'>
        <div className='flex rounded-full justify-center bg-white w-[365px] h-[365px]'>
            <Image alt='image' src={'pet.svg'} width={208} height={195} />
        </div>
        </div>

        <div className='flex flex-col w-[50%] bg-white text-black space-y-10 justify-center items-center'>
        <p>Bienvenidos</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
            <Input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='mb-1 shadow-[2px_3px_4px_rgba(0,0,0,0.3)] h-12 text-black'
              required
              />
            <Input 
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='shadow-[2px_3px_4px_rgba(0,0,0,0.6)] h-12 text-black'
              required
              />
        
        <p>Olvidaste tu contasena?</p>
          <Button
            type="submit"
            className='shadow-[#00000029] w-[239px] h-[75px] rounded-full bg-[#4487FF] opacity-100'
            >
            </Button>
          <Link href={'/register'}>REGRISTRARSE</Link>
        </Form>
        </div>
    </div>
  )
}
