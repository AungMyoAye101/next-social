import Link from 'next/link'
import React from 'react'
import { ThemeSwitcher } from './theme-switch'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center gap-4 py-4'>
      <Link href={'/'}>Home</Link>
      <div className='flex items-center justify-center'>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar