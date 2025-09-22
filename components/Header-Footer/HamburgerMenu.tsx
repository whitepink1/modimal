import Image from 'next/image'
import React from 'react'

const HamburgerMenu = () => {
    return (
        <div>
            <Image 
                src="/icons/hamburger-icon.svg"
                width={24}
                height={24}
                alt="Menu"
            />
        </div>
    )
}

export default HamburgerMenu