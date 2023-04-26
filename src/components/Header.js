import React from 'react'
import HamburgerIcon from "../assets/images/hamburger.svg"
import VideoIcon from "../assets/images/videoLogo.svg"
import ProfileIcon from "../assets/images/profile.svg"
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarVisiblilitySlice'
import { Link } from 'react-router-dom'
import SuggestiveSearchBar from './SuggestiveSearch/SuggestiveSearchBar'

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
            <SuggestiveSearchBar />
            <div className='mx-2'>
                <img className="w-8 h-8 text-black-900" src={ProfileIcon} alt="profile-icon" />
            </div>

        </div>
    )
}

export default Header