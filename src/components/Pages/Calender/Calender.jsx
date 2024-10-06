import React from "react";
import { Left } from "../../Columns/Left";
import Date from "../../Function/Date";
import cData from "./calenderData.json"

export const Calender = () => {
  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] mt-4">
        <div className="rounded-[18px] border-[1px] border-[#B1B1B1]">
          <div className="p-[30px] flex items-center justify-between">
            <h3 className="text-[16px] text-[#232A35]">13 Oct 2023</h3>
            <div className="px-1 rounded-[1000px] w-[80px] h-[36px] bg-[#EAFFDD] flex items-center justify-evenly text-[9.75px]">
              <img src="/assets/img/calendar-icon.svg" alt="cIcon" />
              <h4>Today</h4>
              <img src="/assets/img/drop-down.svg" alt="dIcon" className="w-[13px] h-[13px]" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-0">
            {
              cData.map((c) => (
                <div>
                  <Date day={c.day} date={c.date} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
