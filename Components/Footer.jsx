import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BitLinks. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="/privacy"
            className="hover:underline"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline"
            aria-label="Terms of Use"
          >
            Terms of Use
          </Link>
          <Link
            href="https://avm08122005.github.io/my-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="GitHub"
          >
            Who made this?
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
