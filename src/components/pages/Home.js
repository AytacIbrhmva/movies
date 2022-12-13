import React from 'react';
import {BiTimer, BiCalendarEvent} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import Movies from './Movies';

export default function Home() {
  return (
    <div>
        {/* hero */}
        <div className='bg-madagaskar h-[100vh] bg-center bg-cover bg-no-repeat'>
            <div className='pt-20 px-4  md:px-24 flex items-end pb-10 lg:pb-24 w-full h-full bg-overlay'>
                <div className='flex flex-col  lg:flex-row lg:justify-between w-full items-end'>
                    {/* left */}
                    <div className='flex flex-col items-end lg:items-start mb-3 lg:mb-0 space-y-3 sm:space-y-5'>
                        <h1 className='text-white text-[30px] sm:text-[80px] font-bold'>Madagascar</h1>
                        {/* category */}
                        <div className='text-white '>Animation, Adventure, Comedy</div>
                        {/* time */}
                        <div className='flex space-x-4'>
                            {/* year */}
                            <div className='text-white flex items-center '>
                                <BiCalendarEvent className='text-[17px] text-yellow-400' />
                                2005
                            </div>
                            {/* time */}
                            <div className='text-white flex items-center'>
                                <BiTimer className='text-[22px] text-yellow-400' />
                                126 min
                            </div>
                        </div>
                        {/* rating */}
                        <div className='flex items-center space-x-2'>
                            <AiFillStar className='text-yellow-400' />
                            <label className='text-white' >IMDb rating: 6.9 / <span className='text-gray-300'>10</span></label>
                        </div>
                        {/* rating end */}
                    </div>

                    {/* right */}
                    <div>
                        <div className='text-end flex flex-col gap-3 '>
                            <p className='text-white'>
                                Eric Darnell, Tom McGrath
                                <span className='ml-2 text-yellow-400'>:Directors</span>
                            </p>
                            <p className='text-white'>
                                Mark Burton, Billy, Eric Darnell
                                <span className='ml-2 text-yellow-400'>:Writers</span>
                            </p>
                            <p className='text-white'>
                                Chris Rock (voice), Ben Stiller (voice), David Schwimmer (voice)
                                <span className='ml-2 text-yellow-400'>:Stars</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* hero end */}
        <Movies />
    </div>
  )
}
