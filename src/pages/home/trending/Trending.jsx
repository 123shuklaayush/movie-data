import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwtichTabs from '../../../components/switchTabs/SwtichTabs'
import useFetch from "../../../hooks/useFetch"
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day")
    const {data, loading}= useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint( tab === "Day"  ? "day" : "week" );
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwtichTabs data = {["Day", "Week"]} onTabChange= {onTabChange}/>
        </ContentWrapper>
      
    </div>
  )
}

export default Trending
