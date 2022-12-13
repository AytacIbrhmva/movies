import React,{useEffect, useState}  from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {BsSearch, BsBookmarkFill} from 'react-icons/bs';
import {AiFillStar, AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {BiTimer, BiCalendarEvent} from 'react-icons/bi';
import {TbMovieOff} from 'react-icons/tb';
import axios from 'axios';
import { popularMovies } from './MovieData';
import { ratedMovies } from './MovieData';
import { comingMovies } from './MovieData';

export default function Movies() {

    const [category, setCategory] = useState(false)
    const [loading, setLoading] = useState(true)

    
    const [popular, setPopular] = useState([])
    const [coming, setComing] = useState([])
    const [rated, setRated] = useState([])

    const [search, setSearch] = useState('')

    const [getPopular, setGetPopular] = useState(true)
    const [getComing, setGetComing] = useState(true)
    const [getRated, setGetRated] = useState(true)

    const [movie, setMovie] = useState();

    const toMovie = () => {

    }

    const [all, setAll] = useState(true)

    const getAll = () => {
     setGetComing(true)
     setGetPopular(true)
     setGetRated(true)
     setAll(true)
    }

    const getPopulars = () => {
        setGetPopular(true)
        setGetComing(false)
        setGetRated(false)
        setAll(false)
    }

    const getComings = () => {
        setGetPopular(false)
        setGetComing(true)
        setGetRated(false)
        setAll(false)
    }

    const getRateds = () => {
        setGetPopular(false)
        setGetComing(false)
        setGetRated(true)
        setAll(false)
    }


    // useEffect(() => {
    //    axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_ozotjad9')
    //     .then((response) => setPopular( response.data.items ))
    //     .finally(() => setLoading(false) )

    //     axios.get('https://imdb-api.com/en/API/Top250Movies/k_ozotjad9')
    //     .then((response) => setRated( response.data.items ))  
    //     .finally(() => setLoading(false) )
        
    //     axios.get('https://imdb-api.com/en/API/ComingSoon/k_ozotjad9')
    //     .then((response) => setComing( response.data.items ))
    //     .finally(() => setLoading(false) )
    // }, [])


  return (
    <div id='movies' className='py-10'>


        {/* category */}
        <div className='w-full flex justify-center'>
            {/* container */}
            <div className='w-full  px-4 md:px-24'>
                <div className='flex w-full justify-between border-b-2 border-indigo-500'>
                    {/* filter */}
                    <div className=' hidden lg:flex space-x-10'>
                        <button onClick={() => getAll()} className='bg-transparent text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>All Formats</button>
                        <button onClick={() => getPopulars()} className='bg-transparent text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Popular</button>
                        <button onClick={() => getRateds()}  className='bg-transparent text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Rated</button>
                        <button onClick={() => getComings()} className='bg-transparent text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Coming Soon</button>
                    </div>

                    {/* form */}
                    <form className='flex w-full lg:w-[250px] justify-between items-center'>
                        <input onChange={(e) => setSearch(e.target.value)} type='text' className='bg-transparent text-gray-300 outline-0' placeholder='Search by name' 
                        />
                        <BsSearch className='text-white cursor-pointer' />          
                    </form>
                </div>
                {/* responsive category*/}
                <div className='flex flex-wrap gap-4 mt-4 lg:hidden '>
                    <button onClick={() => getAll()} className='bg-transparent border border-gray-400 rounded-full py-2 px-5 flex items-center gap-3 text-start text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>All</button>
                    <button onClick={() => getPopulars()} className='bg-transparent border border-gray-400 rounded-full py-2 px-5 text-start  text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Popular</button>
                    <button onClick={() => getComings()} className='bg-transparent border border-gray-400 rounded-full py-2 px-5 text-start  text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Coming Soon</button>
                    <button onClick={() => getRateds()}  className='bg-transparent border border-gray-400 rounded-full py-2 px-5 text-start  text-gray-300 outline-0 hover:text-sky-400 transition duration-300'>Rated</button>
                </div>
            </div>
        </div>
        {/* category end */}


        {/* movies */}
        <div className='w-full flex justify-center py-10 '>
            {/* container */}
            <div className='w-full px-4 md:px-24'>
                <div className='flex justify-center flex-col gap-6'>
                   
                    {/* Rated */}
                    <div className={getRated ? 'flex flex-wrap justify-around lg:justify-between  gap-6' : 'hidden'}>
                    {ratedMovies.filter(movie => movie.title.toLowerCase().includes(search.toLocaleLowerCase())).map(
                        (movie, index) => index < 30 && (
                        <Link to={`/ratedmovie/${index}`} className='w-[200px] overflow-hidden rounded-t-xl bg-gray-800'>
                            {/* overlay */}
                            <div className='relative pb-3 justify-end flex flex-col w-full h-full transition duration-300 hover:bg-overlay'>          
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
        
                    {/* popular */}
                    <div className={getPopular ? 'flex flex-wrap justify-around lg:justify-between gap-6' : 'hidden'}>
                    {popularMovies.filter(movie => movie.title.toLowerCase().includes(search.toLocaleLowerCase())).map(
                        (movie, index) => index < 30 && (
                        <Link to={`/popularmovie/${index}`} className=' w-[200px] overflow-hidden rounded-t-xl bg-gray-800'>
                            {/* overlay */}
                            <div className='relative pb-3 justify-end flex flex-col w-full h-full transition duration-300 hover:bg-overlay'>          
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


                    {/* Coming*/}
                    <div className={getComing ? 'flex flex-wrap justify-around lg:justify-between gap-6' : 'hidden'}>
                    {comingMovies.filter(movie => movie.title.toLowerCase().includes(search.toLocaleLowerCase())).map(
                        (movie, index) => index < 30 && (
                        <Link to={`/comingmovie/${index}`}  className=' w-[200px] overflow-hidden rounded-t-xl bg-gray-800'>
                            {/* overlay */}
                            <div className='relative pb-3 justify-end flex flex-col w-full h-full transition duration-300 hover:bg-overlay'>          
                                {/* rating */}
                                <div className='absolute flex  items-center gap-1 right-0 mr-3 mt-3'>
                                    <AiFillStar className=' text-yellow-400' />
                                    <p className='text-white'>{movie.imDbRating}</p>
                                </div>
                                <img src={movie.image}  className='top-0 h-full w-full object-cover'/>
                                <div className='px-3 pt-3'>
                                    <div className='flex items-center gap-2'>
                                        <BiCalendarEvent className='text-yellow-400' />
                                        <p className='text-sky-200'>{movie.releaseState}</p>
                                    </div>
                                </div> 
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        {/* movies end */}
   
    </div>
  )
}
