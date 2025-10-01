import React from 'react'
import LoadingPC from './LoadingPC'

const LoadingListPC = () => {
    return (
        <div className='w-full flex justify-between gap-2'>
            <div className='w-full '><LoadingPC /></div>
            <div className='w-full '><LoadingPC /></div>
            <div className='w-full hidden lg:block'><LoadingPC /></div>
        </div>
    )
}

export default LoadingListPC