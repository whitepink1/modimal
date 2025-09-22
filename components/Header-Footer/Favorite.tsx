import Image from 'next/image'
import React from 'react'

const Favorite = () => {
    return (
        <div>
            <Image 
                src="/icons/favorite-icon.svg"
                width={24}
                height={24}
                alt="Favorite"/>
        </div>
    )
}

export default Favorite