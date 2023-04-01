import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero(){

    return (
        <div id='home' className='w-full h-screen text-center'>
            <div id='home-container-contents'>
                <div className="py-8 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-20">
                    <h2 className="font-eczar mb-4 text-gray-600 uppercase text-sm tracking-widest  app-p">
                        COLLABORATOR & CREATOR 
                    </h2>
                    <h1 className="name-header font-eczar mb-4 font-bold  text-blue-500 md:text-4xl lg:text-5xl dark:text-white">
                        <span className="h1color">Hello, I&#39;m </span>
                        Brendan
                    </h1>
                    <h1 className="name-header font-eczar py-8 mb-4 font-bold md:text-4xl lg:text-5xl dark:text-white">
                        <span className="h1color">A Fullstack Web Developer</span>
                    </h1>
                    <p className="text-gray-700 sm:max-w-[70%] m-auto ">
                        I am focused on building responsive web & mobile applications, while
                        learning & exploring new technologies within the engineering the ecoystem. I enjoy learning about 
                        frontend and backend development, creating YouTube videos, and playing games in my free time.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a 
                            href='https://www.linkedin.com/in/brendan-furtado/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedin />    
                            </div>
                        </a>
                        <a 
                            href='https://github.com/brendanfurtado'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a 
                            href='/resume.pdf'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                        <a 
                            href='/contact'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}