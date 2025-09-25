import React from 'react'
import SubscribeFooter from './SubscribeFooter'
import FooterNavigation from './FooterNavigation'
import Socials from './Socials'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-gray-4040'>
            <div className='w-full flex flex-col items-start justify-center gap-6 lg:flex-row lg:justify-between max-w-page p-5 mx-auto lg:py-6 lg:px-0'>
                <div className='block lg:h-64 lg:flex lg:flex-col lg:justify-between items-start'>
                    <SubscribeFooter />
                    <div className='lg:block hidden'>
                        <Socials />
                    </div>
                </div>
                <FooterNavigation />
                <div className='w-full block lg:hidden'><Socials /></div>
            </div>
            <p className='flex items-center gap-1 max-w-page p-5 text-white caption-sm mx-auto lg:px-0 lg:py-5'>
                <Image src="/icons/copyright.svg" width={16} height={16} alt="copyright icon"/>
                2023 modimal. All Rights Reserved.
                </p>
        </div>
    )
}

export default Footer