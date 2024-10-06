import React from "react";
import { Left } from "../../Columns/Left";
import User from "../../Function/User";
import Card from "./Card";

export const Member = () => {
  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] flex justify-between mt-4">
        <div className="rounded-[18px] p-[14px] border-[#EBEBEB] border-[1px]">
          <div className="flex gap-[6px] items-center">
            <img src="/assets/img/member-icon.svg" />
            <h3 className="text-[#6A6A6A] text-[14px]">Members</h3>
          </div>
          <div className="mt-3 rounded-[100px] flex px-3 items-center gap-[15px] border-[#EBEBEB] border-[1px] h-[48px] w-full">
            <img
              src="/assets/img/search-icon.svg"
              className="w-[16px] h-[16px]"
            />
            <input
              type="text"
              placeholder="Search member"
              className="placeholder:text-[#6A6A6A] h-full w-full focus:outline-none"
            />
          </div>
          <div className="w-[220px]">
            <User
              user="/assets/img/profile.svg"
              name="Md Shyed"
              role="UX/UI Designer"
            />
            <div className="w-full h-[1px] bg-[#EDEDED]"></div>
            <User
              user="/assets/img/profile.svg"
              name="Md Shyed"
              role="UX/UI Designer"
            />
            <div className="w-full h-[1px] bg-[#EDEDED]"></div>
            <User
              user="/assets/img/profile.svg"
              name="Md Shyed"
              role="UX/UI Designer"
            />
            <div className="w-full h-[1px] bg-[#EDEDED]"></div>
          </div>
        </div>
        <div>
          <div className="bg-white border-[1px] border-[#EBEBEB] rounded-[8px] flex items-center gap-[5px] p-[7px]">
            <Card
              number="1299"
              todo="Active Member"
              icon="/assets/img/member-icon1.svg"
            />
            <Card
              number="159"
              todo="Active Projects"
              icon="/assets/img/member-icon2.svg"
            />
            <Card
              number="250"
              todo="Complete Projects"
              icon="/assets/img/member-icon3.svg"
            />
          </div>
          <div className="mt-[15px] rounded-[18px] p-[30px] border-[#EBEBEB] border-[1px]">
            <h2 className="text-black text-[14px]">Add Mmeber</h2>
            <p className="mt-2 text-[#6A6A6A] text-[12px]">
              add your favorite person
            </p>
            <div className="mt-3 w-full h-[48px] flex items-center justify-between border-[#EBEBEB] border-[1px] rounded-[8px] pl-5 pr-px">
              <input
                type="text"
                placeholder="shyed@hassan.com"
                className="placeholder:text-[#6A6A6A] w-full h-full focus:outline-none"
              />
              <button className="bg-black rounded-[8px] text-white flex items-center justify-center h-[42px] w-[128px]">
                Invite
              </button>
            </div>
            <div className="mt-[25px] ">
              <h3 className="text-[12px] text-[#6A6A6A] mb-3">Approver</h3>
              <User
                user="/assets/img/profile.svg"
                name="Md Shyed"
                role="UX/UI Designer"
              />
            </div>
            <div className="mt-[70px]">
              <h5 className="text-[#292D32] text-[12px]">Link To Share</h5>
              <div className="mt-2 flex gap-1">
                <input
                  type="text"
                  placeholder="https.mycompany.com"
                  className="text-[14px] w-full h-[48px] border-[1px] border-[#EBEBEB] rounded-[8px] placeholder:text-[#6A6A6A] focus:outline-none pl-5"
                />
                <button className="w-[98px] h-[48px] rounded-[8px] border-[1px] border-[#E1E1E1] flex items-center justify-center text-[14px] text-black">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
