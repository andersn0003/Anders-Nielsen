import React from 'react'
import ExperienceContents from '../components/ExperienceContents'

export default function Education() {
    return (
        <div className='flex flex-col gap-10'>
            <ExperienceContents period={{ start: '2015', end: '2017' }} company='Cata LabsTaras Shevchenko National University of Kyiv' role={'Bachelor of Science in Computer Science'} description={'Engaged in in-depth research within the field of software engineering, culminating in the publication of a seminal paper in a prestigious scientific journal, showcasing a commitment to academic rigor and innovation.Spearheaded a multidisciplinary team of engineers to conceptualize and construct a dynamic business ecosystem tailored for multiple enterprises, demonstrating adept leadership skills and a proactive approach to collaborative project development.'} link={''} detail={[]} />
            <ExperienceContents period={{ start: '2015', end: '2017' }} company='Cata LabsTaras Shevchenko National University of Kyiv' role={'Bachelor of Science in Computer Science'} description={'Engaged in in-depth research within the field of software engineering, culminating in the publication of a seminal paper in a prestigious scientific journal, showcasing a commitment to academic rigor and innovation.Spearheaded a multidisciplinary team of engineers to conceptualize and construct a dynamic business ecosystem tailored for multiple enterprises, demonstrating adept leadership skills and a proactive approach to collaborative project development.'} link={''} detail={[]} />
        </div>
    )
}
