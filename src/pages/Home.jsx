import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default Home