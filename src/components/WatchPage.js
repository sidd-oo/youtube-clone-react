import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../redux/sidebarVisiblilitySlice';

const WatchPage = () => {

  const [params] = useSearchParams();
  const videoID = params.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <div className='flex flex-row m-5 mt-8 h-[70vh] w-[85%] mx-auto justify-between'>
      <div className='w-[70%] border-2 border-gray-900'>
        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoplay allowFullScreen></iframe>
      </div>
      <div className="w-[30%] ml-5 border-2 border-gray-900">
        
      </div>




    </div>
  )
}

export default WatchPage