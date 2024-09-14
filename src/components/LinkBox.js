import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
export default function LinkBox() {
    return (
        <div className='flex flex-row justify-center gap-8'>
            <a href="https://mail.google.com/mail/u/0/#advanced-search/to=andersn0093%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=andersn0093%40gmail.com?compose=new">
                <FontAwesomeIcon icon={faGoogle} size='lg' className='hover:text-red-400' />
            </a>
            <a href="https://discord.gg/andersn0095">
                <FontAwesomeIcon icon={faDiscord} size='lg' className='hover:text-purple-400' />
            </a>
            <a href="https://t.me/andersn0093">
                <FontAwesomeIcon icon={faTelegram} size='lg' className='hover:text-blue-400' />
            </a>
            <a href="https://linkedin.com/in/anders-nielsen-050ab62b7">
                <FontAwesomeIcon icon={faLinkedin} size='lg' className='hover:text-blue-600' />
            </a>
            <a href="https://github.com/coin5555">
                <FontAwesomeIcon icon={faGithub} size='lg' className='hover:text-green-400' />
            </a>
        </div>
    )
}
