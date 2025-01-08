'use client'
import Logo from '@/app/icons/svg/logo-small';
import { usePaths } from '@/hooks/use-nav';
import React from 'react'
import Item from './Item';

type Props = {
    slug: string;
}

const SideBar = ({ slug }: Props) => {
    const { page, pathName } = usePaths();
    return (
        <div
            className='w-[250px] 
    border-[1px]
    radial 
    fixed 
    left-0 
    lg:inline-block
    border-[#545454] 
    bg-gradient-to-b from-[#768BDD] 
    via-[#171717]
     to-[#768BDD] 
     hidden 
     bottom-0 
     top-0 
     m-3 
     rounded-3xl 
     overflow-hidden'
        >
            <div className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl">
                <div className="flex gap-x-2 items-center justify-center p-5 ">
                    <Logo />
                </div>
                <div className="flex flex-col">
                    <Item/>
                </div>
            </div>
        </div>
    )
}

export default SideBar