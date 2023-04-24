import React from 'react'
import { SIDEBAR_OPTIONS } from "../utils/constants"
import { useSelector } from 'react-redux'

const SidebarOption = ({ icon, name }) => {
  return (
    <div className='hover:bg-gray-200 rounded-lg mt-1 px-5 py-3 flex'>
      <img className="w-6 h-6 mr-5" src={icon} alt={name} />
      <h2 className='font-semibold text-md'>{name}</h2>
    </div>
  )
}

const Sidebar = () => {
  const sidebarVisibility = useSelector((store) => store.sidebarVisibility.value);

  return sidebarVisibility ? (
    <div className='w-[220px] shadow-md py-4 px-2'>
      {SIDEBAR_OPTIONS?.map((options, index) => {
        return <SidebarOption key={index} icon={options.icon} name={options.name} />
      })}
    </div>
  ) : null;
}

export default Sidebar