import React from 'react'

const Tag = ({ name }) => {
    return (
        <button className='w-100  bg-gray-200 text-black px-3 py-1 mx-3 rounded-lg'>
            {name}
        </button>)
}

const VideoTags = () => {
    return (
        <div className='flex ml-5 mt-5 overflow-scroll scrollbar-hide'>
            <Tag name="All" />
            <Tag name="Music" />
             <Tag name="Gaming" /> 
             <Tag name="News" /> 
             <Tag name="Anime" /> 
             <Tag name="Cartoon" />
              <Tag name="Movies/Series" />
              <Tag name="All" />
            <Tag name="Music" />
             <Tag name="Gaming" /> 
             <Tag name="News" /> 
             <Tag name="Anime" /> 
             <Tag name="Cartoon" />
              <Tag name="Movies/Series" />
              <Tag name="All" />
            <Tag name="Music" />
             <Tag name="Gaming" /> 
             <Tag name="News" /> 
             <Tag name="Anime" /> 
             <Tag name="Cartoon" />
              <Tag name="Movies/Series" />
              <Tag name="All" />
            <Tag name="Music" />
             <Tag name="Gaming" /> 
             <Tag name="News" /> 
             <Tag name="Anime" /> 
             <Tag name="Cartoon" />
              <Tag name="Movies/Series" />
        </div>
    )
}

export default VideoTags