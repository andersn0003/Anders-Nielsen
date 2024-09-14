import React from 'react'

export default function Title({ content }) {
  return (
    <div className='bg-gray-500 text-white w-[300px] text-center text-[24px] px-4 py-1 rounded-xl'>
      {content}
    </div>
  )
}
