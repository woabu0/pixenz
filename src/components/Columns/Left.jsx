import React from "react";
import left from "./leftData.json";
import project from "./projectData.json";
import { Link } from "react-router-dom";

export const Left = () => {
  return (
    <div className="fixed">
      <div>
        {left.map((l) => (
          <Link to={l.path}>
            <div className="w-[205px] h-[40px] flex items-center gap-[9px] rounded-[8px] hover:bg-[#F9F9F9] pl-3 cursor-pointer">
              <img src={l.icon} alt="icon" />
              <h2>{l.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-[30px]">
        <div className="flex items-center justify-between w-[205px] pl-3 text-[12px]">
          <h1>PROJECT'S</h1>
          <img src="assets/img/plus-icon.svg" alt="plus-icon" />
        </div>
        <div className="mt-[25px] pl-3">
          {project.map((p) => (
            <div className="flex items-center gap-[10px] mt-5">
              <div className="w-5 h-5 rounded-[6px] bg-[#FFEA03]"></div>
              <h2>{p.title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-[48px] pl-3 flex items-center gap-3 cursor-pointer">
          <img src="assets/img/logout-icon.svg" alt="logout" />
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
};
