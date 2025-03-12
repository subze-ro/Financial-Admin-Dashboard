import React from 'react'
import { FiCalendar } from 'react-icons/fi';


const TopBar = () => {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
      <div className='flex items-center justify-between p-0.5'>
        <div>
        <span className='text-sm font-bold block '>Good morning, Alex!</span>
          <span className='block text-xs text-stone-500 '>Wednesday, March 12th 2025</span>
        </div>
        <button className='flex text-sm  items-center gap-2 bg-stone-100 transition-colors hover:bg-cyan-100 hover:text-cyan=700 px-3 py-1.5 rounded'>
      <FiCalendar/>
      <span>Prev 6 Months</span>
      </button>
      </div>    
      
    </div>
  )
}

export default TopBar;