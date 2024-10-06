import React from "react";
import { Left } from "../../Columns/Left";
import Column from "./Column";
import Task from "./Task";
import column from "./columnData.json"
import task from "./taskData.json"

export const Managements = () => {
  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] mt-4">
        <div className="text-[14px] flex items-center justify-between">
          <p>Date: 16/03/2023</p>
          <p className="flex items-center gap-1 text-[#9AABBD]">
            <div className="w-[5px] h-[5px] bg-[#FF0000] rounded-[50px]"></div>
            Update 13 min ago
          </p>
        </div>
        <div className="mt-[10px] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[26px]">
            <img src="/assets/img/management-logo.svg" alt="logo" />
            <p>Tdygoals 101</p>
          </div>
          <div className="flex items-center gap-0">
            <img src="/assets/img/profile-icon.svg" alt="profileIcon" />
            <img src="/assets/img/profile-icon.svg" alt="profileIcon" />
            <img src="/assets/img/profile-icon.svg" alt="profileIcon" />
            <img src="/assets/img/profile-icon.svg" alt="profileIcon" />
            <img src="/assets/img/plus-icon.svg" alt="profileIcon" />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="h-[35px] w-[215px] rounded-[50px] flex items-center border-[1px] border-[#EFEFEF] pl-[10px]">
            <img src="/assets/img/search-icon.svg" alt="searchIcon" />
            <input
              type="text"
              placeholder="Search Task"
              className="h-full w-full focus:outline-none rounded-[50px] pl-[10px]"
            />
          </div>
          <div className="w-[140px] h-[35px] flex items-center justify-between bg-[#EDEDED] px-1 rounded-[50px]">
            <div className="w-[68px] h-[30px] bg-white rounded-[50px] flex items-center justify-center gap-1">
              <img src="/assets/img/board-icon.svg" alt="boardIcon" />
              Board
            </div>
            <div className="w-[68px] h-[30px] rounded-[50px] flex items-center justify-center gap-1">
              <img src="/assets/img/list-icon.svg" alt="boardIcon" />
              List
            </div>
          </div>
          <div className="flex items-center gap-1 text-[12px]">
            <div className="bg-[#EAFFDD] w-[75px] h-[35px] rounded-[50px] flex items-center justify-between px-2">
              <img src="/assets/img/filter-icon.svg" alt="filterIcon" />
              Filter
              <img src="/assets/img/drop-down.svg" alt="dropDown" />
            </div>
            <div className="bg-[#EAFFDD] w-[75px] h-[35px] rounded-[50px] flex items-center justify-between px-2">
              <img src="/assets/img/date-icon.svg" alt="dateIcon" />
              Today
              <img src="/assets/img/drop-down.svg" alt="dropDown" />
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
            {column.map((c) => (
                <div className="w-[270px] bg-[#F9F9F9]  mt-4 px-3 py-7 rounded-[15px]">
                    <Column task={c.column} />
                    {task.map((t) => (
                        <div>
                            <Task folder={t.folder} title={t.title} tag1={t.tag1} tag2={t.tag2} date={t.date} task={t.task} taskImg={t.taskImg} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
