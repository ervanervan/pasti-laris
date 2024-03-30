import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import iconCrown from "../assets/icon-crown.svg";
import iconLock from "../assets/icon-lock.svg";
import iconNote2 from "../assets/icon-note-2.svg";
import iconDeviceMessage from "../assets/icon-device-message.svg";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="">
      <div className="py-24 container mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-5xl leading-[4rem]">
            Good For Your Business
          </h1>
          <p>We have designed a feature based on latest research</p>
        </div>
      </div>
      <Tabs className="flex flex-col items-center">
        <TabList className="flex items-center gap-10">
          <Tab
            className={`group flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
              activeTab === 0 ? "border-green-2" : "border-transparent"
            }`}
            onClick={() => handleTabClick(0)}
          >
            <div
              className={`p-3 rounded-full ${
                activeTab === 0 ? "bg-green-2" : "bg-gray-1"
              }`}
            >
              <img src={iconCrown} alt="" />
            </div>
            <span className="font-semibold text-xl">Automations</span>
          </Tab>
          <Tab
            className={`group flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
              activeTab === 1 ? "border-green-2" : "border-transparent"
            }`}
            onClick={() => handleTabClick(1)}
          >
            <div
              className={`p-3 rounded-full  ${
                activeTab === 1 ? "bg-green-2" : "bg-gray-1"
              }`}
            >
              <img src={iconNote2} alt="" />
            </div>
            <span className="font-semibold text-xl">Real-Time</span>
          </Tab>
          <Tab
            className={`group flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
              activeTab === 2 ? "border-green-2" : "border-transparent"
            }`}
            onClick={() => handleTabClick(2)}
          >
            <div
              className={`p-3 rounded-full  ${
                activeTab === 2 ? "bg-green-2" : "bg-gray-1"
              }`}
            >
              <img src={iconDeviceMessage} alt="" />
            </div>
            <span className="font-semibold text-xl">Lifetime Support</span>
          </Tab>
          <Tab
            className={`group flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
              activeTab === 3 ? "border-green-2" : "border-transparent"
            }`}
            onClick={() => handleTabClick(3)}
          >
            <div
              className={`p-3 rounded-full  ${
                activeTab === 3 ? "bg-green-2" : "bg-gray-1"
              }`}
            >
              <img src={iconLock} alt="" />
            </div>
            <span className="font-semibold text-xl">High Protection</span>
          </Tab>
        </TabList>
        <TabPanel>
          <div></div>
          <div></div>
        </TabPanel>
        <TabPanel>2222222222222</TabPanel>
        <TabPanel>3333333333333</TabPanel>
        <TabPanel>4444444444444</TabPanel>
      </Tabs>
    </section>
  );
}
