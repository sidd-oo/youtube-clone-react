import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { publishedAt as publishedAtFunc } from '../../utils/publisedAt';
import Profile from "../../assets/images/profile.svg"
import LikeDarkIcon from "../../assets/images/like-dark.png"

const VideoInfo = ({ setLiveBroadcastContent }) => {

    const [videoInfo, setVideoInfo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get('v')

    useEffect(() => {
        const getVideoInfo = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${process.env.REACT_APP_API_KEY}`);
            setVideoInfo(res.data);
            setLiveBroadcastContent(res.data.items[0].snippet.liveBroadcastContent === "live" ? true : false)
        }
        getVideoInfo();
    }, [videoID, setLiveBroadcastContent])

    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-xl'>{videoInfo?.items[0]?.snippet?.title}</h1>
            <div className="flex justify-between items-center">
                <div className="flex mt-2">
                    <img className="h-12 w-12" src={Profile} alt="channelIcon" />
                    <div className="flex-col">
                        <h2 className="font-semibold ml-2">{videoInfo?.items[0]?.snippet?.channelTitle}</h2>
                        <h5 className="ml-2 font-semibold text-sm text-gray-400">1.36M</h5>
                    </div>
                    <button className='ml-8 h-9 bg-black text-white rounded-full  px-4 py-0'>Subscribe</button>
                </div>
                <div>
                    <h2 className='flex mx-5'>
                        <button className='flex justify-center items-center ml-8 h-9 bg-gray-100 font-semibold text-black rounded-full px-4 py-0'>
                            <img className="h-5 w-5 mr-2" src={LikeDarkIcon} alt="" />
                            <span className='mr-2'>{videoInfo?.items[0]?.statistics?.likeCount}</span>
                            <span className='mr-2'>|</span>
                            <img className="h-5 w-5 mr-2 rotate-180 mt-1" src={LikeDarkIcon} alt="" />
                        </button>
                        <button className='ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-4 py-0'>Share</button>
                        <button className='ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-4 py-0'>Save</button>
                        <button className='ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-4 py-0'>...</button>
                    </h2>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mt-3">
                <div className="flex font-semibold">
                    <h2>{videoInfo?.items[0]?.statistics?.viewCount / 100}K views</h2>
                    <h2 className='ml-4'>{publishedAtFunc(videoInfo?.items[0]?.snippet?.publishedAt)}</h2>
                    <h2 className='ml-4'>#hashtags #trending #india</h2>
                </div>
                <div className='h-[150px] text-ellipsist overflow-y-scroll scrollbar-hide'>{videoInfo?.items[0]?.snippet?.description}</div>
            </div>
        </div>
    )
}

export default VideoInfo