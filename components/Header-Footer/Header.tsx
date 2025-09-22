import React from 'react'
import Logo from '../shared/Logo';
import HamburgerMenu from './HamburgerMenu';
import Search from './Search';
import Favorite from './Favorite';
import Bag from './Bag';
import Account from './Account';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div>
            <p className='h-4 lg:h-7.5 flex items-center justify-center bg-primary-600 text-white body-xs lg:overline-sm'>Enjoy Free Shipping on All Orders</p>
            <div className='flex items-center justify-between h-10 lg:h-20 w-full px-5 lg:px-0 max-w-page lg:mx-auto'>
                <div className='flex gap-1 lg:hidden'>
                    <HamburgerMenu />
                    <Search />
                </div>
                <Logo />
                <Navigation />
                <div className='flex gap-1'>
                    <div className='hidden gap-1 lg:flex'>
                        <Search />
                        <Account />
                    </div>
                    <Favorite />
                    <Bag />
                </div>
            </div>
        </div>
    )
}

export default Header;