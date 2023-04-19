import React from 'react'
import HamburgerIcon from "../assets/images/hamburger.svg"
import VideoIcon from "../assets/images/videoLogo.svg"
import ProfileIcon from "../assets/images/profile.svg"
import SearchIcon from "../assets/images/search.svg"
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarVisiblilitySlice'

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex w-100 h-[50px] p-2 justify-between shadow-md'>
            <div className='flex mx-2'>
                <img className="w-8 h-8 ml-3 hover:cursor-pointer" onClick={()=>{
                    dispatch(toggleSidebar())
                }}src={HamburgerIcon} alt="hamburger-icon" />
                <img className="w-8 h-8 ml-3" src={VideoIcon} alt="video-icon" />
            </div>
            <div className='flex mx-2'>
                <input className="border-2 rounded-l-3xl border-r-0" type='text' placeholder='Search'></input>
                <button>
                    <img className='border-2 rounded-r-3xl  border-l-0 w-6 h-8' src={SearchIcon} alt="search-icon" />
                </button>
            </div>
            <div className='mx-2'>
                <img className="w-8 h-8 text-black-900" src={ProfileIcon} alt="profile-icon" />
            </div>

        </div>
    )
}

export default Header