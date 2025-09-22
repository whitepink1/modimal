import Image from 'next/image'
import React from 'react'

const Bag = () => {
    return (
        <div>
            <Image 
                src="/icons/bag-icon.svg"
                width={24}
                height={24}
                alt="Search"/>
        </div>
    )
}

export default Bag