"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { TAB_DATA } from "./tabData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (titleTab: string) => {
    startTransition(() => {
      setTab(titleTab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid grid-cols-2 gap-4 py-7">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-extrabold mb-2 ml-4 ">About Me</h1>
          <p className="px-3 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            hic perspiciatis ullam deleniti temporibus architecto, vel provident
            quos in natus pariatur magnam eius veniam dignissimos at eaque
            facilis ad. Totam.
          </p>
          <div className="flex justify-between text-[#ADB7BE] mt-5  lg:mt-6 ">
            {TAB_DATA.map((t) => {
              return (
                <TabButton
                  key={t.id}
                  active={tab == t.id}
                  selectTab={() => handleTabChange(t.id)}
                >
                  {t.label}
                </TabButton>
              );
            })}
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => tab == t.id)?.content}
          </div>
        </div>
        <div className="lg:mt-3.5 text-center mt-5 ">
          <Image
            alt="my school"
            src={"/Images/profile.png"}
            width={500}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
