import React, { useContext, useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {GiSunflower} from 'react-icons/gi'
import { AppContext } from '../context/AppContext'


const Header = () => {
  const {setmyStyle,myStyle} = useContext(AppContext)

  const toggleHandler = () => {
    if(myStyle.color === 'black'){
      setmyStyle({
        color:'white',
        backgroundColor:'black',
      })
    }
    else{
      setmyStyle({
        color:'black',
        backgroundColor:'white'
      })
    }
  }
  return (
    <div className=' w-full border shadow-md shadow-gray-400 py-3 fixed top-0 bg-white mb-[10px] flex justify-center items-center' style={myStyle}  >
    <div className='w-full text-center'>
    <header>
         <h1 className='text-2xl font-bold uppercase '>Blog Posts</h1>
      </header>
    </div>
    <div className='relative right-6 sm:right-28 md:right-56'>
    <button type="button" onClick={toggleHandler}>
    {
      (myStyle.color === 'black') ? (<BsFillMoonStarsFill size={20}/>) : (<GiSunflower size={30}/>)
    }
    </button>
    </div>
    </div>
  )
}

export default Header