import React from 'react'
import Link from 'next/link'

export default function Error404() {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <button className='border bg-blue w-52 h-8'><Link href='/'>Regresar</Link></button>
    </div>
  )
}
