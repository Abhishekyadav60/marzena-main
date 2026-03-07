"use client";

import Image from "next/image";
import { aboutData } from "@/data/products";
import InstagramPage from "@/app/(main)/components/InstagramPage";

export default function AboutSection() {
  const { hero, main, mission, vision, stats, difference } = aboutData;
  const features = difference.features;
  const image = difference.image;

  return (
    <>
      <div className="bg-[#f4f4f4]">
        <div className="w-full px-4 md:px-10 py-8">
          <div className="relative w-full max-w-[1380px] h-[220px] md:h-[320px] mx-auto overflow-hidden">
            <Image
              src={hero.image}
              alt="banner"
              fill
              priority
              className="object-cover object-[center_40%]"
            />

            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 md:p-10">
              <h1 className="text-white text-[28px] md:text-[50px] font-[Calluna] tracking-wide text-center">
                {hero.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="w-full md:w-[1440px] mx-auto px-6 md:px-8 py-12 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl tracking-wider mb-6">
            {main.title}
          </h2>

          <p className="text-gray-600 text-lg md:text-2xl leading-[26px] md:leading-[28px] text-center">
            {main.description}
          </p>
        </div>

        {/* Mission Section */}
        <section className="w-full px-6 md:px-16 pb-14">
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">

            <div className="relative w-full h-[350px] md:h-[650px] md:col-span-2 overflow-hidden">
              <Image
                src={mission.image}
                alt="mission"
                fill
                className="object-cover object-top scale-105"
              />
            </div>

            <div className="bg-white rounded-xl border border-[#EF9491]/50 p-6 md:p-12 flex flex-col justify-center text-center h-auto md:h-[650px] md:col-span-3">
              <h3 className="text-2xl md:text-[35px] font-normal tracking-wider mb-6">
                {mission.title}
                <div className="w-12 h-[1px] bg-[#C1A58B] mx-auto mt-3"></div>
              </h3>

              <p className="text-base md:text-[18px] leading-6 md:leading-[26px] text-center">
                {mission.description}
              </p>
            </div>

          </div>
        </section>

        {/* Vision Section */}
        <div className="w-full px-6 md:px-16 pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

            <div className="bg-white rounded-xl border border-[#EF9491]/50 p-6 md:p-12 flex flex-col justify-center text-center h-auto md:h-[650px]">
              <h3 className="text-2xl md:text-[35px] font-normal tracking-wider mb-6">
                {vision.title}
                <div className="w-12 h-[1px] bg-[#C1A58B] mx-auto mt-3"></div>
              </h3>

              <p className="text-base md:text-[18px] leading-6 md:leading-[26px] text-center">
                {vision.description}
              </p>
            </div>

            <div className="relative w-full h-[350px] md:h-[650px] overflow-hidden">
              <Image
                src={vision.image}
                alt="vision"
                fill
                className="object-cover object-top scale-105"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#FAEEE3] py-12 md:py-18">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 text-center md:text-left">
            <h2 className="font-[Calluna] font-normal text-3xl md:text-[43px] leading-[40px] md:leading-[48px]">
              {stats.heading}
            </h2>

            <p className="font-[Open_Sans] text-lg md:text-[29px] leading-[28px] md:leading-[34px] text-[#000000]">
              {stats.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-25 gap-y-6 md:gap-y-10">

              {stats.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-dashed border-[#400B0F]/60 rounded-lg w-full md:w-[210px] h-[200px] md:h-[255px] flex flex-col items-center justify-center text-center"
                >

                  <h3 className="font-light mb-4 text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]">
                    {item.number}
                  </h3>

                  <p className="font-light leading-[24px] md:leading-[34px] mt-2 text-center text-lg md:text-2xl text-[#5a4636]">
                    {item.label.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Difference Section */}
      <div className="w-full bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-[1290px] mx-auto px-6">

          <h2 className="text-center text-3xl md:text-5xl leading-[40px] md:leading-[48px] tracking-wide mb-12 md:mb-18">
            {difference.heading}
          </h2>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-5 items-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-12 pr-0 md:pr-4">

              {features?.map((item, index) => (
                <div key={index}>

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="mb-4"
                  />

                  <h3 className="font-semibold text-xl md:text-[22px] leading-[26px] md:leading-[28px] mb-3 text-[#202020]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] md:text-[16px] leading-[22px] font-normal text-gray-600">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

            {/* Right Image */}
            <div className="relative w-full h-[350px] md:h-[520px] rounded-lg overflow-hidden ml-auto">

              <Image
                src={image}
                alt="model"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>
      </div>

      <InstagramPage />
    </>
  );
}