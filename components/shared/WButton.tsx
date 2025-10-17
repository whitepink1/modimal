import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    url: string;
    text: string;
    addClass?: string;
}

const WButton = ({url, text, addClass}: ButtonProps) => {
    
    return (
        <Link href={url} className={`w-[150px] h-10 lg:w-[185px] flex items-center justify-center button-sm bg-white ${addClass}`}>{text}</Link>
    )
}

export default WButton