import Image from 'next/image'
import React from 'react'

const FollowUs = () => {
    return (
        <div className='w-full max-w-page px-5 mt-5 lg:mt-10 mb-12 mx-auto'>
            <h3 className='text-black mobile-h2 lg:h3'>Follow us @Modimal</h3>
            <div className='w-full h-[95vw] lg:h-[650px] relative mt-5 xl:h-[750px]'>
                <Image
                    src="/images/follow-us.png"
                    fill
                    style={{objectFit: "contain"}}
                    className='hidden lg:block'
                    alt="Team members"/>
                <Image
                    src="/images/follow-us-sm.svg"
                    fill
                    style={{objectFit: "contain"}}
                    className='lg:hidden block'
                    alt="Team members"/>
            </div>
        </div>
    )
}

export default FollowUs