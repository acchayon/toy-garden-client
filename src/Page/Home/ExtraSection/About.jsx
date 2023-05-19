import React from 'react';

const About = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center'>Who invented Teddy Bear?</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between items-center bg-zinc-400 hover:bg-zinc-200 p-10 gap-3 rounded-xl mt-10'>
                <div className='mx-auto'>
                    <img className='rounded-full w-44' src="https://i.ibb.co/gFd7ZC2/invent1.jpg" alt="" />
                    <p className='text-xl font-bold mx-auto'>Morris Michtom</p>
                </div>
                <div>
                    <p className='text-xl'>“Richard Steiff was a German designer who invented jointed teddy bears in 1902, introducing moveable arms and legs to plush toys.
                        Morris Michtom, an American businessman, created the first teddy bear in the United States in 1902.
                        Richard Steiff and Morris Michtom played pivotal roles in the early development and popularization of teddy bears, making them iconic and beloved toys worldwide.”</p>
                </div>
                <div className='mx-auto'>
                    <img className='rounded-full w-44' src="https://i.ibb.co/qrvTxSR/invent2.jpg" alt="" />
                    <p className='text-xl font-bold mx-auto'>Richard Steiff</p>
                </div>

            </div>
        </div>
    );
};

export default About;