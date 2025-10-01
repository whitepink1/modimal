'use client'
import React from 'react'
import { motion } from "motion/react"

const LoadingPC = () => {
    return (
        <motion.div 
            animate={{ opacity: [0.6, 0.95, 0.6] }} 
            transition={{
                duration: 2,        
                repeat: Infinity, 
                ease: "easeInOut",
            }} 
            className='w-full h-full flex flex-col gap-1 items-start justify-between opacity-85'>
                <div className='relative w-full aspect-[2/3] bg-gray-500' />
                <div className='w-full flex flex-col justify-center gap-1 lg:gap-2'>
                    <div className='px-3 h-5 w-30 bg-gray-500' />
                    <div className='w-full flex flex-col justify-center gap-1 items-start lg:flex-row lg:justify-between px-3'>
                        <div className='px-3 h-5 w-30 bg-gray-500' />
                        <div className='px-3 h-5 w-8 bg-gray-500' />
                    </div>
                    <div className='px-3 h-5 w-30 bg-gray-500' />
                </div>
        </motion.div>)
}

export default LoadingPC