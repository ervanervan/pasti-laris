import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import iconCrown from "../assets/icon-crown.svg";
import iconLock from "../assets/icon-lock.svg";
import iconNote2 from "../assets/icon-note-2.svg";
import iconDeviceMessage from "../assets/icon-device-message.svg";
import bannerServices from "../assets/banner-services.png";
import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section>
      <div className="pt-24 container mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:leading-[4rem]">
            Good For Your Business
          </h1>
          <p className="font-medium text-lg">
            We have designed a feature based on latest research
          </p>
        </div>

        <Tabs>
          <div className="py-12 flex items-center justify-center">
            <TabList className="flex items-center gap-10 md:gap-16 px-4 overflow-x-scroll scrollbar-hide">
              <Tab
                className={`group shrink-0 flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
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
                className={`group shrink-0 flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
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
                className={`group shrink-0 flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
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
                className={`group shrink-0 flex items-center gap-4 cursor-pointer border-b-4 pb-6 ${
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
          </div>
          <div className="px-4 pb-24">
            <TabPanel className="flex flex-col lg:flex-row gap-y-8 items-center justify-between">
              <div className="flex items-center justify-center flex-1">
                <img src={bannerServices} alt="" />
              </div>
              <div className="flex flex-col items-start flex-1 gap-8">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-3xl font-bold leading-[2.75rem]">
                    We’re Helping Big <br /> Global Companies Grow
                  </h2>
                  <p className="font-medium text-lg w-full md:w-4/5">
                    Track your customers behavior to make a good decision that
                    helps the customer use our services better way.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Auto running when reaches certain number
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Sending message to server for repeatation
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Reporting and extracting the data
                    </p>
                  </div>
                </div>
                <Button variant="secondary" size="md">
                  Learn More
                </Button>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col lg:flex-row gap-y-8 items-center justify-between">
              <div className="flex items-center justify-center flex-1">
                <img src={bannerServices} alt="" />
              </div>
              <div className="flex flex-col items-start flex-1 gap-8">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-3xl font-bold leading-[2.75rem]">
                    We’re Helping Big <br /> Global Companies Grow
                  </h2>
                  <p className="font-medium text-lg w-full md:w-4/5">
                    Track your customers behavior to make a good decision that
                    helps the customer use our services better way.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Auto running when reaches certain number
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Sending message to server for repeatation
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Reporting and extracting the data
                    </p>
                  </div>
                </div>
                <Button variant="secondary" size="md">
                  Learn More
                </Button>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col lg:flex-row gap-y-8 items-center justify-between">
              <div className="flex items-center justify-center flex-1">
                <img src={bannerServices} alt="" />
              </div>
              <div className="flex flex-col items-start flex-1 gap-8">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-3xl font-bold leading-[2.75rem]">
                    We’re Helping Big <br /> Global Companies Grow
                  </h2>
                  <p className="font-medium text-lg w-full md:w-4/5">
                    Track your customers behavior to make a good decision that
                    helps the customer use our services better way.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Auto running when reaches certain number
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Sending message to server for repeatation
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Reporting and extracting the data
                    </p>
                  </div>
                </div>
                <Button variant="secondary" size="md">
                  Learn More
                </Button>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col lg:flex-row gap-y-8 items-center justify-between">
              <div className="flex items-center justify-center flex-1">
                <img src={bannerServices} alt="" />
              </div>
              <div className="flex flex-col items-start flex-1 gap-8">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-3xl font-bold leading-[2.75rem]">
                    We’re Helping Big <br /> Global Companies Grow
                  </h2>
                  <p className="font-medium text-lg w-full md:w-4/5">
                    Track your customers behavior to make a good decision that
                    helps the customer use our services better way.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Auto running when reaches certain number
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Sending message to server for repeatation
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                      <img src={iconCheck} alt="" />
                    </div>
                    <p className="font-bold text-lg">
                      Reporting and extracting the data
                    </p>
                  </div>
                </div>
                <Button variant="secondary" size="md">
                  Learn More
                </Button>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
