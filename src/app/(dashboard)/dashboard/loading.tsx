import Loader from '@/components/globle/loader'
import React from 'react'

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <Loader state>
       ...Loading
      </Loader>
    </div>
  )
}

export default loading