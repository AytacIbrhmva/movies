import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';
import {BiCalendarEvent} from 'react-icons/bi';
import {BsBookmarkFill} from 'react-icons/bs';
import {IoIosHeart} from 'react-icons/io';
import { ratedMovies } from './MovieData';

export default function WatchList() {
  return (
    <div className='bg-fixed  bg-movieBg bg-cover bg-no-repeat '>
        {/* overlay */}
        <div className='bg-overlay flex justify-center '>
            {/* container*/}
            <div className='max-w-[1200px] px-4 md:px-24 py-[130px]'>
                {/* Rated */}
                <div className='flex flex-wrap justify-around gap-6'>
                    {ratedMovies.map(
                        (movie, index) => index < 30 && (
                        <Link to={`/movie/${index}`} className=' w-[200px] overflow-hidden rounded-t-xl bg-gray-800'>
                            {/* overlay */}
                            <div className='relative pb-3 justify-end flex flex-col w-full h-full transition duration-300 hover:bg-overlay'>          
                                <div className='absolute flex bg-white p-2 rounded-xl  items-center top-0 right-0 '>
                                    <IoIosHeart className=' text-gray-800 text-[24px] transition duration-300 hover:text-sky-400' />
                                </div>
                                {/* rating */}
                                <div className='absolute flex  items-center gap-1 right-0 mr-3 mt-3'>
                                    <AiFillStar className=' text-yellow-400' />
                                    <p className='text-white'>{movie.imDbRating}</p>
                                </div>
                                <img src={movie.image}  className='top-0 h-full w-full object-cover'/>
                                <div className='px-3 pt-3'>
                                    <div className='flex items-center gap-2'>
                                        <BiCalendarEvent className='text-yellow-400' />
                                        <p className='text-sky-200'>{movie.year}</p>
                                    </div>
                                </div> 
                            </div>
                        </Link>
                    ))}
                </div>
            </div>          
        </div>
    </div>
  )
}
