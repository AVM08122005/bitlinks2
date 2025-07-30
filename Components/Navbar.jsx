import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-700 p-3 text-white flex justify-between items-center px-10'>
        <div className="logo text-2xl font-bold cursor-pointer">
            <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-end items-center gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>

            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-white text-purple-700 px-4 py-0.5  cursor-pointer rounded-lg'>Try Now</button></Link>
                <Link target="_blank" href="/github"><button className='bg-white text-purple-700 px-4 py-0.5  cursor-pointer rounded-lg'>Github</button></Link>
            </li>


        </ul>

      </nav>
    </div>
  )
}

export default Navbar
