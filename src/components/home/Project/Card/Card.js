import React from 'react';
import './card.css';
import news from "../../image/news.jpg";
import crokpot from "../../image/CrokPot.png";

const projectData = [
    {
        image: crokpot,
        url: 'https://crok-pot.vercel.app/',
        title: 'CrokPot',
        description: 'Crockpot is a website where you can purchase crockery. We have new and best quality crockery which you can keep for display as well.'
    },
    {
        image: news,
        url: 'https://persist-sable.vercel.app/',
        title: 'News',
        description: 'In this website you can see daily news and you can get latest news from all over the world.'
    },
    {
        image: '',
        url: '',
        title: 'UpComing',
        description: 'UpComing Projects...',
    },
    {
        image: '',
        url: '',
        title: 'UpComing',
        description: 'UpComing Projects...',
    },
    {
        image: '',
        url: '',
        title: 'UpComing',
        description: 'UpComing Projects...',
    },
];

function Card() {
    return (
        <div className="flex flex-wrap justify-around p-5">
            {projectData.map((projects, index) => (
                <div key={index} className="card bg-white border border-gray-300 rounded-lg m-4 w-full sm:w-5/12 md:w-1/4 lg:w-1/5 hover:shadow-2xl transition-shadow duration-300">
                    <div
                        className="card-image-container h-56 rounded-t-lg"
                        style={{ background: `url(${projects.image})`, backgroundSize: "cover", backgroundPosition: 'center' }}
                    ></div>
                    <div className='flex justify-between  border-b border-gray-300'>
                        <p className="card-title text-lg font-bold">{projects.title}</p>
                        <a href={projects.url} target='_blank' rel="noopener noreferrer">
                            <p className='text-blue-400'>Visit site</p>
                        </a>
                    </div>
                    <p className="card-des text-gray-600">{projects.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
