import React from 'react'
import UpperLeft from './UpperLeft'
import LowerLeft from './LowerLeft'

const LeftSection = () => {
  return (
    <>
        <div className='w-[23%] flex flex-col gap-2'>
            <UpperLeft />
            <LowerLeft />
        </div>
    </>
  )
}

export default LeftSection