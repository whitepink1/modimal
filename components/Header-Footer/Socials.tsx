import React from 'react'
import SocialIcon from './SocialIcon'
import ContactModal from './ContactModal'

const Socials = () => {
    return (
        <div className='w-full flex justify-between lg:inline-block'>
            <div className='flex justify-start items-center gap-4'>
                <SocialIcon img="/icons/instagram.svg" name="Instagram"/>
                <SocialIcon img="/icons/facebook.svg" name="Facebook"/>
                <SocialIcon img="/icons/pinterest.svg" name="Pinterest"/>
                <SocialIcon img="/icons/tiktok.svg" name="Tik Tok"/>
            </div>
            <div className='block lg:hidden'><ContactModal /></div>
        </div>
    )
}

export default Socials