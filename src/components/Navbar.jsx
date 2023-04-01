import Link from 'next/link'
import React from 'react'

function Navbar() {

  return (
    <div className="bg-008BEA w-full h-[66px] center justify-between px-[30px]" >
      logo
      <div className="center" >
        <Link href="/cadastro">
          <span className='mr-[1rem]'>cria conta</span>
        </Link>
        <Link href="/login">
          <span>login</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar