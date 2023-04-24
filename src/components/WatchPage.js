import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../redux/sidebarVisiblilitySlice';
import LiveChat from './LiveChat';
import VideoPlayer from './VideoPlayer';
import CommentsThread from './CommentsThread';

const WatchPage = () => {

  const [params] = useSearchParams();
  const videoID = params.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <div className='flex flex-col w-[85%] mx-auto items-center'>
      <div className='flex flex-row m-5 mt-8 h-[70vh] w-full justify-between'>
        <div className='w-[70%] h-[500px] border-2 border-gray-900'>
          <VideoPlayer videoID={videoID} />
        </div>
        <div className="w-[30%] ml-5 border-2 border-gray-900">
          <LiveChat />
        </div>
      </div>
      <div className='flex flex-row m-5 mt-8 h-[70vh] w-full justify-between'>
        <div className='w-[70%] border-2 border-gray-900'>
          <CommentsThread />
        </div>
        <div className="w-[30%] ml-5 border-2 border-gray-900">
          Suggestion of Videos goes here
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default WatchPage