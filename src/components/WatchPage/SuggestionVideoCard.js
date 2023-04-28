import React from 'react'
import { Link } from 'react-router-dom'
import WatchPage from './WatchPage'
import { publishedAt } from '../../utils/publisedAt'

const SuggestionVideoCard = ({ video }) => {
    return (
        <Link to={"/watch?v=" + video.id} element={<WatchPage />}>
            <div className='flex flex-row p-2'>
                <img className='w-48 rounded-lg' src={video?.snippet?.thumbnails?.maxres?.url || video?.snippet?.thumbnails?.medium?.url} alt="" />
                <div className="w-68 flex-col ml-2">
                    <h2 className='text-black font-semibold text-sm'>{video?.snippet?.title.substring(0, 60)}</h2>
                    <h3 className='text-gray-500 text-sm '>{video?.snippet?.channelTitle}</h3>
                    <div className='flex justify-start gap-2 text-sm text-gray-500'>
                        <h3>{parseInt(video?.statistics?.viewCount / 1000)}K{" "}</h3>
                        <h3>{video && publishedAt(video?.snippet?.publishedAt)}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SuggestionVideoCard