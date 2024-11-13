import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  return (
    <div className='flex flex-row w-[1440px] h-[900px]'>
        <div className='flex bg-[red] w-[50%] h-full justify-center items-center'>
        <div className='flex rounded-full justify-center bg-white w-[365px] h-[365px]'>
            <Image alt='image' src={'pet.svg'} width={208} height={195} />
        </div>
        </div>

        <div className='flex flex-col w-[50%] bg-white text-black space-y-10 justify-center items-center'>
        <p>Bienvenidos</p>
        <div className='flex flex-col w-[448px]'>
            <input type='form' className='mb-1 shadow-[2px_3px_4px_rgba(0,0,0,0.3)] h-12 text-black' />
            <input type='form' className='shadow-[2px_3px_4px_rgba(0,0,0,0.6)] h-12 text-black' /> 
        </div>
        
        <p>Olvidaste tu contasena?</p>
        <button className='shadow-[#00000029] w-[239px] h-[75px] rounded-full bg-[#4487FF] opacity-100'>Entrar</button>
        <p><Link href={''}>REGRISTRARSE</Link></p>
        </div>
    </div>
  )
}
