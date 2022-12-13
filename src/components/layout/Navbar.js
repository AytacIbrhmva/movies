import React, { useState } from 'react';
import Home from '../pages/Home';
import {IoDiamondSharp} from 'react-icons/io5';
import {BsBookmarkFill} from 'react-icons/bs';
import {ImMenu4, ImMenu3} from 'react-icons/im';
import {Link } from 'react-router-dom';
import Movies from '../pages/Movies';

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open);

  return (
    <>
    <nav className='absolute z-50 w-full '>
        {/* container */}
        <div className='flex fixed px-4 md:px-24 py-5 items-center w-full justify-between  bg-gray-900' >
            {/* logo */}
            <div className='flex items-center justify-between w-full'>
                <Link to='/' className='flex text-[22px] items-center text-white font-bold'>
                    <IoDiamondSharp className='text-sky-200 text-[28px] mr-3'/>
                    Diamond<span className='text-sky-400'>Movies</span>
                </Link>
                <ImMenu3 onClick={() => toggle()} className={open ? 'sm:hidden text-sky-200 text-[28px] cursor-pointer hover:text-white transition duration-300' : 'hidden' } />
                <ImMenu4 onClick={() => toggle()} className={open ? 'hidden' : 'sm:hidden text-sky-200 text-[28px] cursor-pointer hover:text-white transition duration-300' } />
            </div>
            {/* menu */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-10'>
                    <li>
                        <Link to='/' className='text-white font-medium transition duration-300 hover:text-sky-300 py-3'>HOME</Link>
                    </li>
                    {/* <li>
                        <Link to='/watchlist' className='flex gap-3 items-center text-white font-medium transition duration-300 hover:text-sky-300 py-3'>
                            WATCHLIST
                            <BsBookmarkFill/>
                        </Link>
                    </li> */}
                </ul>
            </div>
            {/* menu end */}

            {/* sidebar */}
            <div className='sm:hidden '>
                {/* menu */}
                <div className={open ? 'scale-y-1 opacity-100 origin-top transition duration-300 absolute mt-8 right-0 bg-gray-900 p-6' : 'scale-y-0 opacity-0 origin-top transition duration-300 absolute mt-8 right-0 bg-gray-900 p-6'}>
                    <ul className='flex flex-col gap-5'>
                        <li>
                            <Link to='/' onClick={() => toggle()} className='text-white font-medium transition duration-300 hover:text-sky-300 py-3'>HOME</Link>
                        </li>
                        {/* <li>
                            <Link to='/watchlist' onClick={() => toggle()} className='flex gap-3 items-center text-white font-medium transition duration-300 hover:text-sky-300 py-3'>
                                WATCHLIST
                                <BsBookmarkFill/>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                {/* menu end */}
            </div>
            {/* sidebar end */}

        </div>
        {/* container end */}
    </nav>
    </>
  )
}
