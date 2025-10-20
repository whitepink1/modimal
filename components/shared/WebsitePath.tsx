'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const WebsitePath = () => {
    const pathname = usePathname();
    const router = useRouter();
    const pathArray = pathname.split('/');
    const clearedPathArray = pathArray.filter((item) => item);

    const handleBack = (id: number) => {
        if(id === clearedPathArray.length - 2){
            router.back();
        } else {
            router.push(`/${clearedPathArray[id]}`)
        }
    }

    return (
        <div className='flex justify-start items-center max-w-page px-3 mt-6 mb-2 lg:mt-8 lg:mb-12.5 mx-auto'>
            <Link href="/" className='text-primary mobile-body-sm lg:body-lg'>Home</Link>
            {clearedPathArray?.map((item, id) => (
                clearedPathArray.length === id-1 ?
                <p key={item} onClick={() => handleBack(id)} className={`text-primary mobile-body-sm lg:body-lg cursor-pointer`}>&nbsp;/ {item[0].toUpperCase()}{item.slice(1)}</p>
                :
                <p key={item + id} className='mobile-body-sm lg:body-lg'>&nbsp;/ {item[0].toUpperCase()}{item.slice(1)}</p>
            ))}
        </div>
    )
}

export default WebsitePath