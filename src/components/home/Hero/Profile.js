import React from 'react';
import TypeWriter from './TypeWriter/TypeWriter';
import Lottie from './lottie/Lottie';
import Lottie2 from './lottie/Lottie2';
import StarSpace from './lottie/Star';
import ProfileDetail from '../Profile/ProfileDetail';

function Profile() {
    return (
        <div className='relative w-full p-4 md:p-8'>
            <div className='absolute top-0 left-0 w-72'>
                <Lottie2 />
            </div>
            <div className='absolute top-0 right-0 w-96'>
                <StarSpace />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                <div className='w-full md:w-[700px] flex flex-col items-center text-center z-50'>
                    <p className='border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-white w-56 text-white font-semibold px-3 py-1 mb-4'>
                        Welcome to My Portfolio
                    </p>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text-white'>
                        Hi, I'm <TypeWriter />
                    </h1>
                    <p className='text-white mt-8'>I'm Frontend Developer who loved to build beautiful and easy-to-use website. I starting developing Website during my acadmics. I have working on some personal projects for now, and am eager to learn new things. I'm Skill in React Js, React Native and Kotlin and I enjoy creating seamless and Visually appealing websites. </p>
                </div>
                <div className='w-full md:w-auto flex justify-center'>
                    <Lottie />
                </div>
            </div>
        </div>
    );
}

export default Profile;
