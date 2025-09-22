import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" className='relative w-[138px] h-[40px] lg:w-[184px] lg:h-[46px]'>
            <Image 
                src="/logo-sm.svg"
                fill
                alt="Modimal logo"/>
        </Link>
    )
}

export default Logo