import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {

  return (
    <div className="bg-008BEA w-full h-[66px] center justify-between px-[30px]" >
      <div className="relative w-[100px]  mt-[15px] ml-[-15px]" >
        <Image src="/ezfiz_logo 1.png" width={150} height={150} alt="logo ezfix" />
      </div>
      <div className="center text-white font-bold" >
        <Link href="/cadastro">
          <span className="mr-[1rem]">Cria Conta</span>
        </Link>
        <Link href="/login">
          <span className="bg-[#235475] px-[1rem] py-[0.5rem] rounded-lg">Entrar</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar