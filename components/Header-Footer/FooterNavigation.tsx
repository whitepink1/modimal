import React from 'react'
import FooterNavPart from './FooterNavPart'
import { aboutFooter, helpFooter, joinFooter } from '@/lib/data'
import ContactModal from './ContactModal'

const FooterNavigation = () => {
    return (
        <div className='relative w-full flex justify-between flex-wrap lg:justify-center lg:w-fit gap-6 lg:gap-10'>
            <FooterNavPart name="About Modimal" links={aboutFooter} />
            <FooterNavPart name="Help & Support" links={helpFooter} />
            <FooterNavPart name="Join Up" links={joinFooter} />
            <div className='absolute hidden w-fit h-fit right-5 -bottom-5 lg:block'>
                <ContactModal />
            </div>
        </div>
    )
}

export default FooterNavigation