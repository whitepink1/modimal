import Image from 'next/image'
import React from 'react'

const Search = () => {
    return (
        <div>
            <Image 
                src="/icons/search-icon.svg"
                width={24}
                height={24}
                alt="Search"/>
        </div>
    )
}

export default Search