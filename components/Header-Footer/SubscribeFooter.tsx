import Image from 'next/image'
import React from 'react'

const SubscribeFooter = () => {
    return (
        <form className='flex flex-col gap-3'>
            <p className='text-white mobile-h4'>Join our club, get 15% off for your Birthday</p>
            <input type="email" className='h-10 border-1 border-primary-50 placeholder:text-primary-50 pl-3 pr-5' placeholder='Enter Your Email Address'/>
            <div>
                <input type="checkbox" />
                <span>By Submittng your email, you agree to receive advertising emails from Modimal.</span>
                <button type='submit'>
                    <Image
                        src="/icons/arrow-forward.svg"
                        width={16}
                        height={16}
                        alt="Arrow right"/>
                </button>
            </div>
        </form>
    )
}

export default SubscribeFooter