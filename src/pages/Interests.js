import React, { useState } from 'react'

export default function Interests() {
    const [toggle, setIsToggle] = useState(false)
    return (
        <div className='w-full flex flex-col gap-4 '>
            <button className={' w-full py-1 text-center border border-green-500 rounded-sm ' + (toggle ? 'bg-white text-green-500 hover:bg-green-500 hover:text-white' : ' bg-green-500 text-white hover:bg-white hover:text-green-500')} onClick={() => setIsToggle(state => !state)}>
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
