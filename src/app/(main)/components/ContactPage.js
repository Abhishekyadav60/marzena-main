
"use client";

import Image from "next/image";
import { contactData } from "@/data/products";
import InstagramPage from "@/app/(main)/components/InstagramPage"; 

export default function ContactPage() {

  const { banner, heading, form, help } = contactData;

  return (
    <>
    <div className="w-full bg-[#f5f5f5] pb-20">

      {/* Banner */}
      <div className="max-w-[1280px] mx-auto px-4 pt-6">
        <div className="relative w-full h-[180px] md:h-[250px] rounded-md overflow-hidden">
          <Image
            src={banner.image}
            alt="contact"
            fill
            className="object-cover object-[center_13%]"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-lg md:text-3xl font-semibold text-[30px] leading-[38px] tracking-[0px] text-center tracking-wide">
              {banner.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-10 mb-10">
        <h1 className="text-[50px] leading-[58px] font-normaltext-black">
          {heading}
        </h1>
      </div>

      {/* Main Section */}
    <div className="w-full px-6 md:px-16 lg:px-24 grid md:grid-cols-[1.1fr_0.8fr] gap-10 items-stretch">

  {/* Form */}
  <div className="h-full">
    <h3 className="font-sans text-[24px] leading-[30px] font-normal tracking-normal text-[#2f2f2f] mb-2">
      {form.title}
    </h3>

    <p className="text-[18px] leading-[26px] font-normal text-[#686666] mb-8">
      {form.subtitle}
    </p>

    <form className="space-y-6">

      {form.fields.map((field, index) => (
        <div key={index}>
          <label className="text-base text-xl text-[#202020]">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              rows="6"
              className="w-full mt-2 border border-[#C1A58B] rounded-md px-4 py-3 text-base focus:outline-none"
            />
          ) : (
            <input
              type={field.type}
              className="w-full mt-2 border border-[#C1A58B] rounded-md px-4 py-4 text-base focus:outline-none"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-[#bfa58a] text-white text-base px-8 py-3 rounded-md hover:bg-[#a58d74] transition"
      >
        {form.button}
      </button>

    </form>
  </div>

  {/* Help Card */}
  <div className="bg-[#FAEEE3] rounded-md p-10 h-full flex flex-col justify-between">

    <div>
      <h3 className="text-[20px] leading-[28px] font-normal mb-4">
        {help.title}
      </h3>

      <p className="text-[18px] text-[#686666] leading-[26px] font-normal mb-8">
        {help.description}
      </p>

      <button className="bg-[#C1A58B] text-white w-[217px] h-[46px] px-6 py-2 rounded-[8px] flex items-center justify-center gap-3 mb-8 cursor-pointer">
        {help.button}
      </button>

      <div className="space-y-4 text-base text-[#686666]">

        {help.contacts.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-[18px] leading-[26px] font-normal">
            <Image 
              src={item.icon} 
              alt="icon" 
              width={22} 
              height={22} 
            />
            <span>{item.text}</span>
          </div>
        ))}

      </div>
       <p className="text-[18px] leading-[26px] font-normal text-[#686666] mt-5 ">
      {help.note}
    </p>
    </div>

  </div>

</div>
    </div>
    <InstagramPage/>
</>
  );
}