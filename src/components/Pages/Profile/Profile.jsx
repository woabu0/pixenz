import React from "react";

export const Profile = () => {
  return (
    <div className="flex items-center justify-between w-[255px] h-[48px] border-[#EBEBEB] border-[1px] rounded-[100px] px-1">
      <div className="flex items-center gap-[15px]">
        <img src="assets/img/profile.svg" alt="profile" />
        <div>
          <h2>Muhammad Shyed</h2>
          <h3 className="text-[12px]">Designer</h3>
        </div>
      </div>
      <div className="w-[38px] h-[38px] border-[#EBEBEB] border-[1px] rounded-[100px] flex items-center justify-center cursor-pointer">
        <img src="assets/img/drop-down.svg" alt="drop-down" />
      </div>
    </div>
  );
};
