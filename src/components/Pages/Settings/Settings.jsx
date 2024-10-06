import React, { useState } from "react";
import { Left } from "../../Columns/Left";

const Profile = () => (
  <div>
    <div className="flex items-center justify-center mt-[37px]">
      <div className="flex gap-10">
        <div>
          <h5>Full Name</h5>
          <img
            src="/assets/img/profile.svg"
            alt="profile"
            className="w-[111px] h-[111px] rounded-[50%] mt-[13px]"
          />
        </div>
        <div>
          <h5>Cover Photo</h5>
          <img
            src="/assets/img/cover.svg"
            alt="cover"
            className="w-full h-[84px] mt-[27px] rounded-[6px]"
          />
        </div>
      </div>
    </div>
    <form className="mt-[36px] flex items-center justify-center">
      <div>
        <div className="flex items-center gap-[13px]">
          <div className="flex flex-col gap-[18px]">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Shyed"
              className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
            />
          </div>
          <div className="flex flex-col gap-[18px]">
            <label>Title</label>
            <input
              type="text"
              placeholder="Designer"
              className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
            />
          </div>
        </div>
        <div className="flex gap-[13px] mt-[24px]">
          <div className="flex flex-col items-start gap-[24px]">
            <div className="flex flex-col gap-[18px]">
              <label>Profile Status</label>
              <input
                type="text"
                placeholder="Work From Home"
                className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <label>Website</label>
              <input
                type="text"
                placeholder="shyed.com"
                className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[18px]">
              <label>Website</label>
              <textarea
                placeholder="shyed.com"
                className="w-[336px] h-[145px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-[29px] flex items-center gap-[13px]">
          <div className="w-[336px] h-[41px] rounded-[8px] border-[0.5px] border-[#2B2B2B] border-opacity-[14%] flex items-center justify-center gap-[6px]">
            <img src="/assets/img/trash.svg" alt="trash" />
            Delete Account
          </div>
          <div className="w-[336px] h-[41px] rounded-[8px] bg-[#9FE870] flex items-center justify-center">
            Save
          </div>
        </div>
      </div>
    </form>
  </div>
);
const Password = () => (
  <div>
    <div className="flex items-center justify-center mt-[37px]">
      <form>
        <div className="flex items-center gap-[13px]">
          <div className="flex flex-col gap-[18px]">
            <label>Current Password</label>
            <input
              type="text"
              placeholder="*************"
              className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
            />
          </div>
          <div className="flex flex-col gap-[18px]">
            <label>New Password</label>
            <input
              type="text"
              placeholder="*************"
              className="w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[18px] mt-[24px]">
          <label>Confirm Password</label>
          <input
            type="text"
            placeholder="Work From Home"
            className="w-[686px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] p-5"
          />
        </div>
      </form>
    </div>
    <div className="mt-5 flex items-center justify-between m-auto w-[686px]">
      <div className="bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB] w-[212px] h-[41px] rounded-[98px] flex items-center gap-[7px] px-[10px]">
        <img src="/assets/img/google.svg" alt="google" />
        Connect Gmail
      </div>
      <div className="bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB] w-[212px] h-[41px] rounded-[98px] flex items-center gap-[7px] px-[10px]">
        <img src="/assets/img/facebook.svg" alt="facebook" />
        Connect Facebool
      </div>
      <div className="bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB] w-[212px] h-[41px] rounded-[98px] flex items-center gap-[7px] px-[10px]">
        <img src="/assets/img/number.svg" alt="number" />
        Connect Number
      </div>
    </div>
    <div className="mt-[87px] flex items-center gap-[13px] m-auto w-[686px]">
      <div className="w-[336px] h-[41px] rounded-[8px] border-[0.5px] border-[#2B2B2B] border-opacity-[14%] flex items-center justify-center gap-[6px]">
        <img src="/assets/img/trash.svg" alt="trash" />
        Delete Account
      </div>
      <div className="w-[336px] h-[41px] rounded-[8px] bg-[#9FE870] flex items-center justify-center">
        Save
      </div>
    </div>
  </div>
);
const Subscription = () => <div>Subscription Component</div>;
const Notification = () => (
  <div className="w-[686px] m-auto flex flex-col gap-3">
    <div className="flex items-center justify-between mt-[37px]">
      <div className="flex items-center px-5 w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
        Email Notification
      </div>
      <div className="flex items-center px-5 w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
        Mention Notification
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center px-5 w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
        Message Notification
      </div>
      <div className="flex items-center px-5 w-[336px] h-[41px] rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
        Mention Only
      </div>
    </div>
  </div>
);
const Device = () => (
  <div className="w-[686px] m-auto flex justify-between items-center mt-[37px]">
    <div className="flex justify-between items-start w-[336px] h-[82px] py-3 px-5 rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
      <div>
        <h1>Macbook</h1>
        <p className="mt-2 text-[10px]">Chittagong</p>
      </div>
      <div className="w-[18px] h-[18px] rounded-[50%] bg-[#34A340]"></div>
    </div>
    <div className="flex justify-between items-start w-[336px] h-[82px] py-3 px-5 rounded-[8px] bg-[#D9D9D9] bg-opacity-[17%] border-[1px] border-[#EBEBEB]">
      <div>
        <h1>Samsung</h1>
        <p className="mt-2 text-[10px]">Chittagong</p>
      </div>
      <div className="w-[18px] h-[18px] rounded-[50%] bg-[#34A340]"></div>
    </div>
  </div>
);

export const Settings = () => {
  const [selectedComponent, setSelectedComponent] = useState("profile");

  const handleItemClick = (componentName) => {
    setSelectedComponent(
      componentName === selectedComponent ? null : componentName
    );
  };

  return (
    <div className="w-[1165px] m-auto flex justify-between">
      <div className="w-[29%]">
        <div className="mt-[27px] sticky top-[20px]">
          <Left></Left>
        </div>
      </div>
      <div className="w-[71%] text-[14px] mt-4">
        <ul className="flex justify-evenly items-center w-[475px] h-[46px] border-[.5px] border-[#EBEBEB] m-auto rounded-[36px] mt-[47px] bg-white p-1">
          <li
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-[129px]"
            style={{
              backgroundColor:
                selectedComponent === "profile" ? "#F8F8F8" : "transparent",
            }}
            onClick={() => handleItemClick("profile")}
          >
            Profile
          </li>
          <li
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-[129px]"
            style={{
              backgroundColor:
                selectedComponent === "password" ? "#F8F8F8" : "transparent",
            }}
            onClick={() => handleItemClick("password")}
          >
            Password
          </li>
          <li
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-[129px]"
            style={{
              backgroundColor:
                selectedComponent === "subscription"
                  ? "#F8F8F8"
                  : "transparent",
            }}
            onClick={() => handleItemClick("subscription")}
          >
            Subscription
          </li>
          <li
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-[129px]"
            style={{
              backgroundColor:
                selectedComponent === "notification"
                  ? "#F8F8F8"
                  : "transparent",
            }}
            onClick={() => handleItemClick("notification")}
          >
            Notification
          </li>
          <li
            className="cursor-pointer w-full h-full flex items-center justify-center rounded-[129px]"
            style={{
              backgroundColor:
                selectedComponent === "device" ? "#F8F8F8" : "transparent",
            }}
            onClick={() => handleItemClick("device")}
          >
            Device
          </li>
        </ul>
        <div>
          {selectedComponent === "profile" && <Profile />}
          {selectedComponent === "password" && <Password />}
          {selectedComponent === "subscription" && <Subscription />}
          {selectedComponent === "notification" && <Notification />}
          {selectedComponent === "device" && <Device />}
        </div>
      </div>
    </div>
  );
};
