import Image from 'next/image'
import React from 'react'

const ContactModal = () => {
    return (
        <div className='w-14 h-12 flex items-center justify-center bg-primary-600 border-1 border-white cursor-pointer'>
            <Image
                src="/icons/contact-icon.svg"
                width={24}
                height={24}
                alt="Contact icon"/>
        </div>
    )
}

export default ContactModal