import Image from 'next/image'
import React from 'react'

const SubscribeFooter = () => {
    return (
        <form className='flex flex-col gap-3'>
            <p className='text-white mobile-h4 lg:h5'>Join our club, get 15% off for your Birthday</p>
            <div className='relative w-full h-10'>
                <input type="email" required className='h-full w-full text-white border-1 border-primary-50 placeholder:text-primary-50 placeholder:body-xs pl-3 pr-12 focus:outline-0' placeholder='Enter Your Email Address'/>
                <button type='submit' className='absolute flex justify-center h-10 w-10 right-0 top-1/2 -translate-y-1/2'>
                    <Image
                        src="/icons/arrow-forward.svg"
                        width={18}
                        height={18}
                        alt="Arrow right"/>
                </button>
            </div>
            <div className='flex items-center gap-3'>
                <input type="checkbox" required className='h-4 w-4'/>
                <span className='mobile-overline text-white lg:overline-sm max-w-[370px]'>By Submittng your email, you agree to receive advertising emails from Modimal.</span>
            </div>
        </form>
    )
}

export default SubscribeFooter