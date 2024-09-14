import React, { useState } from 'react'

export default function Interests() {
    const [toggle, setIsToggle] = useState(false)
    return (
        <div className='w-full flex flex-col gap-4 '>
            <button className={' w-full py-1 text-center rounded-sm ' + (toggle ? 'bg-white text-gray-500 hover:bg-gray-500 hover:text-white' : ' bg-gray-500 text-white hover:bg-white hover:text-gray-500')} onClick={() => setIsToggle(state => !state)}>
                Interests
            </button>
            <ul className={' ' + (toggle ? 'flex flex-col items-start list-disc ml-6' : 'hidden')}>
                <li>NFT</li>
                <li>Trade</li>
                <li>DeFi/DEX</li>
                <li>Cross Chain</li>
                <li>Generative AI</li>
            </ul>
        </div>
    )
}
