import React from 'react';
import profile from '../image/profile.png';

function ProfileDetail() {
    return (
        <div className='App bg-gray-900 text-white flex flex-col items-center'>
            <h1 className='text-4xl pt-16 underline'>Profile</h1>
            <div className='flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-10 mt-6 space-y-6 md:space-y-0 md:space-x-6'>
                <div className='w-60 h-60 bg-blue-400 shadow-xl rounded-full flex items-center justify-center overflow-hidden'>
                    <img className='h-full w-full object-cover' src={profile} alt='Profile' />
                </div>
                <div className='p-6 bg-gray-600 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 text-start'>
                    <h2 className='text-3xl w-full text-center font-bold mb-4'>Krishna</h2>
                    <p className='text-lg flex justify-between mb-2'><span className='font-semibold'>Education:</span> BCA (Bachlore fo computer Science)</p>
                    <p className='text-lg flex justify-between mb-2'><span className='font-semibold'>College:</span> IB PG College Panipat</p>
                    <p className='text-lg flex justify-between mb-2'><span className='font-semibold'>Location:</span> Gaur City-2, Greater Noida</p>
                    <p className='text-lg flex justify-between mb-2'><span className='font-semibold'>Email:</span> ks713908@gmail.com</p>
                    <p className='text-lg flex justify-between mb-2'><span className='font-semibold'>Mob No:</span>9518834721</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetail;
