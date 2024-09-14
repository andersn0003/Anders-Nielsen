import React from 'react'

export default function Title({ content }) {
  return (
    <div className='bg-gray-500 text-white w-100 text-center text-[24px] px-4 py-2 rounded-xl'>
      {content}
    </div>
  )
}
