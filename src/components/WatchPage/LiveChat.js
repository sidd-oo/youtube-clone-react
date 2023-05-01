import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../redux/liveBroadcastSlice';
import ProfileIcon from "../../assets/images/profile.svg";
import { generateName } from '../../utils/generateName';
import { useState } from 'react';
import { generateMessage } from '../../utils/generateMessage';
import { generateProfileImage } from '../../utils/generateProfileImages';

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveBroadcast = useSelector((store) => store.liveBroadcast.messages);
  const [yourChatMessage, setYourChatMessage] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessages({
        username: generateName(),
        message: generateMessage(),
      }))
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  });

  const addYourChatMessage = (e) => {
    e.preventDefault();
    dispatch(addMessages({
      username: "You",
      message: yourChatMessage
    }))
    setYourChatMessage("");
  }

  return (
    <>
      <div className=''>
        <h1 className='mx-5 my-3 text-black font-semibold'>Top chat </h1>
        <hr className='m-2 w-full text-gray-600' />
      </div>
      <div className='flex flex-col-reverse h-96 overflow-y-scroll'>
        {
          liveBroadcast?.map((chat, index) => {
            return <div key={index} className='flex flex-row px-3 items-center mb-2'>
              <img className="w-5 h-5 text-black-900 mr-2 rounded-full" src={generateProfileImage() || ProfileIcon} alt="profile-icon" />
              <h1 className="font-semibold mr-2">{chat.username}</h1>
              <h1 className='text-sm'>{chat.message}</h1>
            </div>
          })
        }
      </div>
      <form onSubmit={(e) => { addYourChatMessage(e) }} className='my-3'>
        <input
          type="text"
          className="border-2 border-gray-500 mx-3 w-[75%] rounded-md px-2"
          value={yourChatMessage}
          onChange={(e) => { setYourChatMessage(e.target.value) }}>
        </input>
        <button
          type="submit"
          onClick={(e) => { addYourChatMessage(e) }}
          className='border-2 rounded-lg px-2 bg-gray-400'>
          Chat
        </button>
      </form >
    </>
  )
}

export default LiveChat