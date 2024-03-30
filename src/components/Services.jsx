import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import iconCrown from "../assets/icon-crown.svg";

export default function Services() {
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
        <TabList className="flex items-centers gap-10">
          <Tab className="flex items-center gap-4 cursor-pointer">
            <div className="p-3 rounded-full bg-green-2">
              <img src={iconCrown} alt="" />
            </div>
            <span className="font-semibold">Automations</span>
          </Tab>
          <Tab className="flex items-center gap-4 cursor-pointer">
            <div className="p-3 rounded-full bg-green-2">
              <img src={iconCrown} alt="" />
            </div>
            <span>Automations</span>
          </Tab>
        </TabList>
        <TabPanel>1111111111111</TabPanel>
        <TabPanel>2222222222222</TabPanel>
      </Tabs>
    </section>
  );
}
