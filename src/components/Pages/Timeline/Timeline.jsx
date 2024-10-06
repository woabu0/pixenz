import React, { useState } from "react";
import { Left } from "../../Columns/Left";
import { Right } from "../../Columns/Right";
import post from "./postData.json";
import Post from "../../Function/Post";

export const Timeline = () => {
  const [isVisible, setVisible] = useState(false);

  const visible = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] flex items-start justify-between sticky">
        <div>
          <div className="pt-[16px] pb-[19px] bg-white sticky top-[68px] z-10">
            <div
              onClick={visible}
              className="w-[455px] h-[48px] flex justify-between items-center bg-[#D9D9D9] bg-opacity-[17%] border-[#EBEBEB] border-[.5px] rounded-[100px] px-1"
            >
              <div className="flex gap-[15px] items-center">
                <img src="assets/img/profile.svg" alt="search-icon" />
                <h2>Opening the discussion</h2>
              </div>
              <div className="flex gap-[5px] items-center">
                <div className="w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-white">
                  <img src="assets/img/up-image-icon.svg" alt="up-image-icon" />
                </div>
                <div className="w-[40px] h-[40px] rounded-[100px] flex justify-center items-center bg-white">
                  <img src="assets/img/up-video-icon.svg" alt="up-video-icon" />
                </div>
              </div>
            </div>

            {isVisible && <div></div>}
          </div>
          <div>
            <div className="w-[455px] m-auto">
              {post.map((p) => (
                <div className="mb-3">
                  <Post
                    img={p.img}
                    name={p.name}
                    role={p.role}
                    ago={p.ago}
                    post={p.post}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[16px] sticky top-[84px]">
          <Right></Right>
        </div>
      </div>
    </div>
  );
};
