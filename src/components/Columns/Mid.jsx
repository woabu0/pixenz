import React from 'react'

export const Mid = () => {
  return (
    <div className='text-[#6A6A6A] bg-white'>
        <div className='w-[455px] h-[48px] flex justify-between items-center'>
            <div className='flex gap-[15px] items-center border-[#EBEBEB] border-[1px] rounded-[100px] w-[394px] h-full pl-5'>
                <img src="assets/img/search-icon.svg" alt="search-icon" className='w-[15px] h-[16px]' />
                <h2>Search everything...</h2>
            </div>
            <div className='w-[48px] h-[48px] rounded-[100px] flex justify-center items-center bg-[#EBEBEB]'>
                <img src="assets/img/notification-icon.svg" alt="notification-icon" />
            </div>
        </div>
        <div className='w-[455px] h-[48px] mt-5 flex justify-between items-center border-[#EBEBEB] border-[1px] rounded-[100px] px-1'>
            <div className='flex gap-[15px] items-center h-full'>
                <img src="assets/img/profile.svg" alt="search-icon" />
                <h2>Opening the discussion</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-white'>
                    <img src="assets/img/up-image-icon.svg" alt="up-image-icon" />
                </div>
                <div className='w-[48px] h-[48px] rounded-[100px] flex justify-center items-center bg-white'>
                    <img src="assets/img/up-video-icon.svg" alt="up-video-icon" />
                </div>
            </div>
        </div>
    </div>
  )
}
