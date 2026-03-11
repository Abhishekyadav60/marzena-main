
"use client"

import Image from "next/image"
import { useState } from "react"
import { LayoutGrid, List, Columns, Rows, Heart } from "lucide-react"
import { products, heroData } from "@/data/products"
import HeroSection from "@/app/(main)/components/HeroSection"
import PrimaryButton from "@/app/(main)/components/PrimaryButton"

export default function CollectionPage() {
  const [priceSort, setPriceSort] = useState("Default")
  const [dateSort, setDateSort] = useState("Date, Old To New")

  const filteredProducts = products.filter((item) => {
    if (priceSort === "Under ₹1000") return item.price < 1000
    if (priceSort === "Under ₹2000") return item.price < 2000
    if (priceSort === "Under ₹16500") return item.price < 16500
    return true
  })

  return (
    <>
      {/* Hero Section */}
      <div className="px-8 md:px-24 mt-12">
        <HeroSection
          hero={heroData}
          PrimaryButton={PrimaryButton}
          customHeight="h-[360px] md:h-[380px]"
          contentPosition="items-center justify-end pr-10"
          textAlign="items-center text-right"
          imagePosition="object-[50%_41%]"
        />
      </div>

      {/* Collection Header */}
      <div className="w-full">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-['Javanese_Text'] font-normal text-[44px] leading-[52px] tracking-normal text-center uppercase">
            COLLECTION
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-16 pb-10">
          
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-lg">View as</span>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-white transition">
                <LayoutGrid size={20} />
              </button>
              <button className="p-2 hover:bg-white transition">
                <Columns size={20} />
              </button>
              <button className="p-2 hover:bg-white transition">
                <Rows size={20} />
              </button>
              <button className="p-2 hover:bg-white transition">
                <List size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-9">
            <div className="flex items-center">
              <span className="font-normal text-[12px] leading-[22px] tracking-normal uppercase">
                SORT BY PRICE
              </span>
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="bg-transparent px-4 py-2 outline-none"
              >
                <option>30000</option>
                <option>Under ₹1000</option>
                <option>Under ₹2000</option>
                <option>Under ₹16500</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-normal text-[12px] leading-[22px] tracking-normal uppercase">
                SORT BY
              </span>
              <select
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
                className="bg-transparent px-4 py-2 font-normal text-[12px] leading-[22px] tracking-normal uppercase outline-none"
              >
                <option>Date, Old To New</option>
                <option>Date, New To Old</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className=" min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 lg:gap-y-12">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group">

                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-white">

                  {/* Heart Icon */}
                  <button className="absolute right-1 z-10 p-1 rounded-full hover:scale-110 transition">
                    <Heart size={24} className="text-gray-700" />
                  </button>

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-[50%_25%] rounded-xl group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="pt-4">
                  <h3 className="font-sans text-[18px] leading-[24px] font-normal">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1">
                    <div className="text-[#f4b400] text-xl tracking-wide">
                      ★★★★★
                    </div>
                    <span className="text-gray-500 text-xs">{item.rating}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="font-normal text-base leading-6 text-xl">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="line-through text-gray-400 text-md">
                      ₹{item.oldPrice.toLocaleString()}
                    </span>
                    <span className="bg-[#C1A58B] text-white text-[14px] rounded-md px-2 py-[2px]">
                      {item.discount}% off
                    </span>
                  </div>

                  <button className="
                    mt-4 text-md 
                    border border-[#C1A58B] rounded-md 
                    px-5 py-2 
                    hover:bg-black hover:text-white 
                    transition
                  ">
                    ADD TO CART
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}