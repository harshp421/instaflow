import SideBar from '@/components/globle/sidebar';
import React from 'react'

type Props = {
    children:React.ReactNode;
    params:{slug:string}
}

const layout = ({children,params}: Props) => {
   //query client -react query

    return (
    <div className='p-3'>
        <SideBar slug={params.slug}/>
        {children}</div>
  )
}

export default layout