import React from 'react'

export default function Skillbar({ percentage }) {
    const circles = ['', '', '', '', '', '', '', '', '', ''];
    return (
        <div className='w-full flex flex-row justify-between'>
            {circles.map((circle, index) => (
                <div className={"w-2 h-2 rounded-full" + ((index + 1) <= percentage ? ' bg-green-400' : ' bg-gray-200')} key={index}>{circle}</div>
            ))}
        </div>
    )
}
