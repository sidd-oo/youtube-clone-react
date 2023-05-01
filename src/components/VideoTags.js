import React from 'react'

const Tag = ({ name }) => {
    return (
        <button className='w-100  bg-gray-200 text-black px-3 py-1 mx-3 rounded-lg'>
            {name}
        </button>)
}

const VideoTags = () => {
    return (
        <div className='flex ml-1 mt-5 overflow-scroll scrollbar-hide'>
            <button className='w-100  bg-black text-white px-3 py-1 mx-3 rounded-lg'>
                Popular
            </button>
            <Tag name="Javascript" />
            <Tag name="Computer Science" />
            <Tag name="Mixes" />
            <Tag name="Music" />
            <Tag name="Gaming" />
            <Tag name="News" />
            <Tag name="Comedy" />
            <Tag name="Anime" />
            <Tag name="Cartoon" />
            <Tag name="Politics" />
            <Tag name="Trailers" />
        </div>
    )
}

export default VideoTags