import React from "react";
import { Search } from "../Pages/Search/Search";
import { Profile } from "../Pages/Profile/Profile";

export const Top = () => {
  return (
    <div className="flex items-center justify-between w-[1165px] m-auto sticky top-0 bg-white z-10 h-full pt-[20px]">
      <div className="pl-3 flex items-center gap-1 text-[20px] leading-none w-[29%]">
        <img src="assets/img/logo.svg" alt="logo" />
      </div>
      <div className="flex justify-between w-[71%]">
        <Search></Search>
        <Profile></Profile>
      </div>
    </div>
  );
};
