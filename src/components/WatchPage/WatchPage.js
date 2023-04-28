import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../../redux/sidebarVisiblilitySlice';
import LiveChat from '../LiveChat';
import VideoPlayer from './VideoPlayer';
import CommentsThread from '../CommentsThreads/CommentsThread';
import VideoInfo from './VideoInfo';
import axios from 'axios';
import { VIDEO_LIST_URL } from '../../utils/constants';
import SuggestionVideoCard from "./SuggestionVideoCard";

const WatchPage = () => {

  const [params] = useSearchParams();
  const videoID = params.get("v");
  const dispatch = useDispatch();
  const [liveBroadcastContent, setLiveBroadcastContent] = useState(false);
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  useEffect(() => {
    const fetchVideoList = async () => {
      const res = await axios.get(VIDEO_LIST_URL);
      setVideoList(res.data.items);
    }
    fetchVideoList();
  }, [])

  return (
    <div className='flex flex-col w-[85%] mx-auto items-center'>
      <div className='flex flex-row m-5 mt-8 mb-0 h-[70vh] w-full justify-between'>
        <div className='flex flex-col w-[70%] h-[500px]'>
          <VideoPlayer videoID={videoID} />
        </div>
        {liveBroadcastContent ?
          <div className="w-[30%] ml-5 border-2 border-gray-900">
            <LiveChat />
          </div> : (<div className="w-[30%] ml-5">
            {videoList.map((video) => {
              return <SuggestionVideoCard key={video.id} video={video} />
            })}
          </div>)}
      </div>
      <div className='flex flex-row m-5 h-[70vh] w-full justify-between'>
        <div className='flex flex-col w-[70%]'>
          <VideoInfo
            setLiveBroadcastContent={setLiveBroadcastContent}
          />
        </div>
        <div className="w-[30%]">
        {(liveBroadcastContent === true) && <div className="ml-5">
            {videoList.map((video) => {
              return <SuggestionVideoCard key={video.id} video={video} />
            })}
          </div>}
        </div>
      </div>
      <div className='flex flex-row h-[70vh] w-full justify-between'>
        <div className='w-[70%]'>
          <CommentsThread videoID={videoID} />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default WatchPage