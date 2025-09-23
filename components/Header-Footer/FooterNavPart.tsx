import Link from 'next/link';
import React from 'react'

interface link {
    url: string;
    name: string;
}

const FooterNavPart = ({name, links} : {name: string, links: link[]}) => {
  return (
    <div className='min-w-[140px] flex flex-col gap-1.5 lg:gap-2 items-start justify-start lg:min-w-[150px]'>
       <p className='text-white mobile-h4 lg:h5 lg:mb-4'>{name}</p> 
       {links.map((link, id) => (
        <Link href={link.url} key={link.name + id} className='mobile-body-lg text-white lg:body-lg'>{link.name}</Link>
       ))}
    </div>
  )
}

export default FooterNavPart