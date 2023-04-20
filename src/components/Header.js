import React from 'react'
import HamburgerIcon from "../assets/images/hamburger.svg"
import VideoIcon from "../assets/images/videoLogo.svg"
import ProfileIcon from "../assets/images/profile.svg"
import SearchIcon from "../assets/images/search.svg"
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarVisiblilitySlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex w-100 h-[50px] p-2 justify-between shadow-md'>
            <div className='flex mx-2'>
                <img className="w-8 h-8 ml-3 hover:cursor-pointer" onClick={() => {
                    dispatch(toggleSidebar())
                }} src={HamburgerIcon} alt="hamburger-icon" />
                <Link to="/">
                    <img className="mt-1 h-6 ml-3" src={VideoIcon} alt="video-icon" />
                </Link>
            </div>
            <div className='flex'>
                <input className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0  h-8" type='text' placeholder='Search'></input>
                <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-10 h-8'>
                    <img className='w-5 h-5 mx-auto' src={SearchIcon} alt="search-icon" />
                </button>
            </div>
            <div className='mx-2'>
                <img className="w-8 h-8 text-black-900" src={ProfileIcon} alt="profile-icon" />
            </div>

        </div>
    )
}

export default Header