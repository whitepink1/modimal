import Image from 'next/image'
import React from 'react'

const SocialIcon = ({img, name}: {img: string, name: string}) => {
    return (
        <Image
            src={img}
            width={24}
            height={24}
            alt={`${name} icon`}/>
    )
}

export default SocialIcon