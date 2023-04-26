import React from 'react'
import { Link } from 'react-router-dom'
import WatchPage from './WatchPage/WatchPage'
import { publishedAt } from '../utils/publisedAt'

const VideoCard = ({ video }) => {
    return (
        <Link to={"/watch?v=" + video.id} element={<WatchPage/>}>
            <div className='p-2 w-80'>
                <img className='w-80 rounded-lg' src={video?.snippet?.thumbnails?.maxres?.url || video?.snippet?.thumbnails?.medium?.url} alt=""/>
                <h2 className='font-semibold text-black px-1'>{video?.snippet?.title.substring(0, 60)}</h2>
                <h3 className='px-1 text-gray-500 text-sm '>{video?.snippet?.channelTitle}</h3>
                <div className='flex justify-start gap-2 px-1 text-sm text-gray-500'>
                    <h3>{parseInt(video?.statistics?.viewCount / 1000)}K{" "}</h3>
                    <h3>{video && publishedAt(video?.snippet?.publishedAt)}</h3>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard