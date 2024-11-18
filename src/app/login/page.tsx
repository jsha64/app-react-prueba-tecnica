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
    setError('');
    setLoading(true);

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
    <div className='flex min-h-screen'>
        <div className='flex bg-[#FF6752] w-1/2 items-center justify-center relative'>
        <div className='flex rounded-full justify-center bg-white w-[365px] h-[365px]'>
            <Image alt='image' src={'pet.svg'} width={208} height={195} />
        </div>
        <div 
        className="absolute h-full w-[30%] left-[80%]"
        style={{
          background: 'white',
          borderTopLeftRadius: '100% 70%',
          borderBottomLeftRadius: '100% 70%',
        }}
      />
        </div>

        <div className='flex flex-col w-[50%] bg-white text-black space-y-10 justify-center items-center'>
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">Bienvenidos</h1>
         </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
            <Input 
              type="email"
              value={email}
              placeholder='EMAIL'
              onChange={(e)=>setEmail(e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition'
              required
              />
            <Input 
              type="password"
              value={password}
              placeholder='CONTRASENA'
              onChange={(e)=>setPassword(e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition'
              required
              />
            <div className="flex justify-end">
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-coral-500 transition"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          
          <Button
            type="submit"
            disabled={loading}
            className='w-2/5 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition font-medium'
            >
              {loading ? "Cargando..." : "Iniciar Sesión"}
            </Button>
          <div className="text-center">
              <span className="text-sm text-gray-500">
                AUN NO TENGO CUENTA
                <Link 
                  href="/register" 
                  className="pl-1 text-blue-500 hover:text-blue-600 transition font-medium"
                >
                  REGISTRARSE
                </Link>
              </span>
            </div>
        </Form>
        </div>
    </div>
  )
}
