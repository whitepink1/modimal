import React from 'react'
import {navLinks} from "@/lib/data"
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className='hidden lg:flex items-center justify-center gap-10'>
            {navLinks.map((link) => (
                <Link href={link.url} key={link.name}>{link.name}</Link>
            ))}
        </div>
    )
}

export default Navigation