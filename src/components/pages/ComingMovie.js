import React, { useEffect, useState } from 'react';
import {BiTimer, BiCalendarEvent} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { comingMovies } from './MovieData';
import axios from 'axios';

export default function PopularMovie() {

    const {index} = useParams()

    const [movie, setMovie] = useState(comingMovies[index]);
   



  return (
    <div className='bg-fixed bg-movieBg bg-cover bg-no-repeat '>
        <div className='h-[100vh] bg-overlay flex flex-col md:flex-row items-center px-4 md:px-24 py-24 md:py-10 gap-14'>
            {/* left */}
           <img src={movie.image} className='rounded-md h-[400px] object-cover' /> 

            {/* right*/}
            <div>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-white text-[50px] font-bold'> {movie.title} </h1>

                    <div className='flex space-x-4'>
                        {/* category */}
                        <div className='text-white '>Animation, Adventure, Comedy</div>
                        {/* year */}
                        <div className='text-white gap-2 flex items-center '>
                            <BiCalendarEvent className='text-[17px] text-yellow-400' />  
                            {movie.releaseState}                      
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
