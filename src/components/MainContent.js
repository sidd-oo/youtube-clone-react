import React from 'react'
import VideoTags from './VideoTags'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContent = () => {
  const sidebarVisibility = useSelector((store) => store.sidebarVisibility.value)
  return (
    <div className={sidebarVisibility ? `w-[calc(100vw-220px)]` : `w-[100vw] px-[100px]`}>
      <VideoTags />
      <VideoContainer />
    </div>
  )
}

export default MainContent