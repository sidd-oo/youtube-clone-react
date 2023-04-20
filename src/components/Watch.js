import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSidebar } from '../redux/sidebarVisiblilitySlice';

const Watch = () => {

  const [params] = useSearchParams();
  const videoID = params.get("v");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeSidebar());
  },[dispatch]);

  return (
    <div className='ml-20 mt-5'>
      <iframe width="900" height="500" src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoplay allowFullScreen></iframe>
    </div>
  )
}

export default Watch