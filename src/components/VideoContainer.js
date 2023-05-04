import React, { useEffect, useState } from 'react'
import { VIDEO_LIST_URL } from "../utils/constants"
import axios from 'axios';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        fetchVideoList();
    }, [])

    const fetchVideoList = async () => {
        const res = await axios.get(VIDEO_LIST_URL);
        setVideoList(res.data.items);
    }

    return (
        <div className='p-2 flex flex-wrap mt-5'>
            {videoList?.map((video) => {
                return <VideoCard key={video.id} video={video} />
            })}
        </div>
    )
}

export default VideoContainer