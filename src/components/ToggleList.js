import React from 'react'

export default function ToggleList({ setPageNum }) {

    return (
        <div className='w-full flex justify-center'>
            <ul className='w-full flex flex-col items-center text-[20px]'>
                <li className=' hover:text-red-400' onClick={() => setPageNum(1)}>
                    Experience
                </li>
                <li className=' hover:text-red-400' onClick={() => setPageNum(2)}>
                    Education
                </li>
                <li className=' hover:text-red-400' onClick={() => setPageNum(3)}>
                    Skill
                </li>

            </ul>
        </div>
    )
}
