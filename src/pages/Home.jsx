import React, { useContext } from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import { AppContext } from '../context/AppContext';

const Home = () => {
  const {myStyle} = useContext(AppContext);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center " style={myStyle}>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default Home