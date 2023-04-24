import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../redux/sidebarVisiblilitySlice'

const MainBody = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openSidebar());
    }, [dispatch])

    return (
        <>
            <Header />
            <main className='flex flex-row h-[calc(100vh-50px)]'>
                <Sidebar/>
                <Outlet/>
            </main>
        </>
    )
}

export default MainBody