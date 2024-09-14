import React, { useState } from 'react'
import Skillbar from './skillbar'

export default function SkillSet({ skillName, percentage, detailSkills }) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='w-1/5 min-w-[150px] max-[785px]:w-1/3 max-[420px]:w-full flex flex-col items-start gap-2'>
            <div className='text-[14px]'>{skillName}</div>
            <Skillbar percentage={percentage} />
            <button className={'ml-[70%] w-20 max-[420px]:ml-[85%] border border-gray-500 rounded-full text-[10px] font-semibold p-1 ' + (toggle ? '   bg-white text-gray-500 hover:bg-gray-500 hover:text-white' : 'bg-gray-500 text-white hover:bg-white hover:text-gray-500')} onClick={() => { setToggle(state => !state) }}>
                {toggle ? 'Collapse' : 'Detail'}
            </button>
            <ul className={'transition-all duration-500 text-[14px]' + (toggle ? ' flex flex-col list-disc' : ' hidden')}>
                {
                    detailSkills.map((detailSkill, index) => (
                        <li key={index} className='ml-4'>
                            {detailSkill}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
