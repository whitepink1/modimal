import Image from 'next/image'
import React from 'react'

const Account = () => {
    return (
        <div>
            <Image 
                src="/icons/profile-icon.svg"
                width={24}
                height={24}
                alt="Account"/>
        </div>
    )
}

export default Account