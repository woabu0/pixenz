import React from 'react'

export const Right = () => {
  return (
    <div>
        <div>
            <div className='py-[30px] w-[255px] px-5 bg-[#163300] rounded-[20px] text-center text-white'>
                <h1 className='text-[20px]'>Upgrade to pro</h1>
                <p className='mt-[14px] text-[#ECECEC]'>Unlock the unique future and enjoy it</p>
                <h2 className='mt-[18px] text-[12px]'>Unlock now</h2>
            </div>
        </div>
        <div className='mt-[18px] flex items-center justify-between w-[255px] h-[48px] bg-[#01A1FF] border-[1px] rounded-[100px] px-1 text-white'>
            <div className='flex items-center gap-[15px]'>
                <img src="assets/img/profile.svg" alt="profile" />
                <h2>msh.studio</h2>
            </div>
            <div className='w-[38px] h-[38px] bg-white border-[1px] rounded-[100px] flex items-center justify-center cursor-pointer'>
                <img src="assets/img/arrow-icon.svg" alt="drop-down" />
            </div>
        </div>
        <div className='mt-[18px] flex items-center justify-evenly w-[255px] h-[48px] bg-[#F9F9F9] border-[1px] rounded-[100px] px-1'>
            <div className='flex items-center gap-[15px] text-[#FFB800]'>
                <img src="assets/img/light-icon.svg" alt="light-icon" />
                <h2>Light</h2>
            </div>
            <div className='flex items-center gap-[15px]'>
                <img src="assets/img/dark-icon.svg" alt="dark-icon" />
                <h2>Dark</h2>
            </div>
        </div>
    </div>
  )
}
