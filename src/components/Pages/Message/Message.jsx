import React from "react";
import { Left } from "../../Columns/Left";
import User from "../../Function/User";
import UserMessage from "../../Function/UserMessage";

export const Message = () => {
  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] flex justify-between mt-4">
        <div className="rounded-[18px] p-[14px] border-[#EBEBEB] border-[1px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-[6px] items-center">
              <img src="/assets/img/messenger-message.svg" />
              <h3 className="text-[#6A6A6A] text-[14px]">All Conversation</h3>
            </div>
            <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-[#EBEBEB] flex items-center justify-center bg-[#D9D9D9] bg-opacity-[17%]">
              <img src="/assets/img/messenger-settings.svg" alt="setting" />
            </div>
          </div>
          <div className="mt-3 rounded-[100px] flex px-3 items-center gap-[15px] border-[#EBEBEB] border-[1px] h-[48px] w-full">
            <img
              src="/assets/img/search-icon.svg"
              className="w-[16px] h-[16px]"
            />
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-[#6A6A6A] h-full w-full focus:outline-none"
            />
          </div>
          <div className="w-[260px]">
            <UserMessage
              user="/assets/img/profile.svg"
              name="Md Shyed"
              message="Hey, i am good and you?"
              date="Today, Monday"
              time="12:29 PM"
            />
            <div className="w-full h-[1px] bg-[#EDEDED] mt-3"></div>
            <UserMessage
              user="/assets/img/profile.svg"
              name="Md Shyed"
              message="Hey, i am good and you?"
              date="Today, Monday"
              time="12:29 PM"
            />
            <div className="w-full h-[1px] bg-[#EDEDED] mt-3"></div>
            <UserMessage
              user="/assets/img/profile.svg"
              name="Md Shyed"
              message="Hey, i am good and you?"
              date="Today, Monday"
              time="12:29 PM"
            />
            <div className="w-full h-[1px] bg-[#EDEDED] mt-3"></div>
            <UserMessage
              user="/assets/img/profile.svg"
              name="Md Shyed"
              message="Hey, i am good and you?"
              date="Today, Monday"
              time="12:29 PM"
            />
            <div className="w-full h-[1px] bg-[#EDEDED] mt-3"></div>
          </div>
        </div>
        <div className="w-[530px] rounded-[18px] px-[30px] py-5 border-[1px] border-[#EDEDED]">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <img src="/assets/img/messenger-logo.svg" alt="logo" />
              <div className="flex flex-col justify-between">
                <h1 className="text-[14px] text-[#232A35]">Muhammad Shyed</h1>
                <div className="flex items-center gap-1">
                  <div className="w-[6px] h-[6px] bg-[#57DF00] rounded-[50%]"></div>
                  <h5 className="text-[10px] text-[#6A6A6A]">Active</h5>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-[#D9D9D9] cursor-pointer border-[1px] border-[#EBEBEB] rounded-[50%] flex items-center justify-center bg-opacity-[17%] w-[36px] h-[36px]">
                <img src="/assets/img/messenger-call.svg" alt="call" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer border-[1px] border-[#EBEBEB] rounded-[50%] flex items-center justify-center bg-opacity-[17%] w-[36px] h-[36px]">
                <img src="/assets/img/messenger-video.svg" alt="video" />
              </div>
              <div className="bg-[#D9D9D9] cursor-pointer border-[1px] border-[#EBEBEB] rounded-[50%] flex items-center justify-center bg-opacity-[17%] w-[36px] h-[36px]">
                <img
                  src="/assets/img/messenger-hamburger.svg"
                  alt="hamburger"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-[#EDEDED] my-5"></div>
        </div>
      </div>
    </div>
  );
};
