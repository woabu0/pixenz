import React from "react";

export const Search = () => {
  return (
    <div className="w-[455px] h-[48px] flex justify-between items-center">
      <div className="flex gap-[15px] items-center border-[#EBEBEB] border-[1px] rounded-[100px] w-[394px] h-full pl-5">
        <img
          src="assets/img/search-icon.svg"
          alt="search-icon"
          className="w-[15px] h-[16px]"
        />
        <h2>Search everything...</h2>
      </div>
      <div className="w-[48px] h-[48px] rounded-[100px] flex justify-center items-center border-[1px] border-[#EBEBEB] bg-[#D9D9D9] bg-opacity-[17%] cursor-pointer">
        <img src="assets/img/notification-icon.svg" alt="notification-icon" />
      </div>
    </div>
  );
};
