import React from 'react';
import { Circle } from 'rc-progress';

const skillData = [
    {
        name: 'HTML5',
        percentage: 93,
    },
    {
        name: 'CSS3',
        percentage: 90,
    },
    {
        name: 'JavaScript',
        percentage: 75,
    },
    {
        name: 'React JS',
        percentage: 70,
    },
    {
        name: 'React Native',
        percentage: 60,
    },
    {
        name: 'Kotlin',
        percentage: 65,
    },
    {
        name: 'JetPack Compose',
        percentage: 85,
    },
    {
        name: 'TailWind',
        percentage: 89,
    },
    {
        name: 'FireBase',
        percentage: 60,
    },
    {
        name: 'API',
        percentage: 85,
    },
];

function Skill() {
    return (
        <div className='App p-4'>
            <h1 className='text-white text-5xl mb-8'>Skills</h1>
            <div className='w-full items-center flex justify-center'>
                <div className='overflow-x-auto flex w-[1000px] gap-20 whitespace-nowrap'>
                    {skillData.map((skills, index) => (
                        <div key={index} className='inline-block mr-6 mb-6'>
                            <div className='relative mb-3 flex items-center justify-center w-28 h-28 md:w-40 md:h-40'>
                                <svg className='absolute w-full h-full'>
                                    <defs>
                                        <linearGradient id={`gradient${index}`} x1='0%' y1='0%' x2='100%' y2='0%'>
                                            <stop offset='0%' style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                                            <stop offset='50%' style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
                                            <stop offset='100%' style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <Circle
                                    percent={skills.percentage}
                                    strokeWidth={8}
                                    trailWidth={8}
                                    trailColor='black'
                                    strokeColor={`url(#gradient${index})`}
                                    className='absolute'
                                />
                                <p className='text-white text-xl absolute'>{skills.percentage}%</p>
                            </div>
                            <div className='text-white font-light text-xl'>{skills.name}</div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='text-white'>Scroll More view ---></div>
        </div>
    );
}

export default Skill;
