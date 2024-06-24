import React from 'react'
import Profile from './Hero/Profile'
import Skill from './skill/Skill'
import Project from './Project/Project'
import space from './image/space.jpg'
import Contact from '../contact/Contact'
import ProfileDetail from './Profile/ProfileDetail'


function Home() {
    return (
        <>
            <div className="" style={{ background: `url(${space})`, backgroundSize: "cover" }}>
                <Profile />
                <Skill />
            </div>
            <div className='bg-black'>
                <ProfileDetail />
                <Project />
                <Contact />
            </div>
        </>
    )
}

export default Home