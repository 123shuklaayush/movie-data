import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'

HeroBanner;
const Home = () => {
  return(
    <div className="homePage">
      <HeroBanner/>
      <Trending/>
    </div>
  )
  
}

export default Home
