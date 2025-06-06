import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
  <div className="container mx-auto">
    <nav className="flex items-center">
      <Link href="/">Chris Stallings</Link>
    </nav>
  </div>
  )
}

export default Navbar