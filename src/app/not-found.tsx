import React from 'react'
import Link from 'next/link'

export default function Error404() {
  return (
    <>
    <div className='flex flex-col w-full h-full flex absolute justify-center items-center'>
      <h1 className='text-5xl text-black'>404: Page Not Found</h1>
      <div className='flex mt-8 justify-center w-full'>
        <button className='w-52 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition font-medium'>
          <Link href='/login'>Regresar</Link>
        </button>
      </div>
    </div>
    <div className='flex bg-[#FF6752] w-1/2 items-center justify-center static'>
      <div className='flex flex-row min-w-screen min-h-screen justify-center items-center'>
      </div>
    </div>
    </>
  );
};
