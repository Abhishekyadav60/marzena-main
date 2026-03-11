"use client"

import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"
import { products, heroData } from "@/data/products"
import HeroSection from "@/app/(main)/components/HeroSection"
import PrimaryButton from "@/app/(main)/components/PrimaryButton"

export default function CollectionPage() {
  const [priceSort, setPriceSort] = useState("Default")
  const [dateSort, setDateSort] = useState("Date, Old To New")
  const [view, setView] = useState("grid4")

  const filteredProducts = products.filter((item) => {
    if (priceSort === "Under ₹50,000") return item.price < 50000
    if (priceSort === "Under ₹80,000") return item.price < 80000
    if (priceSort === "Under ₹1,50,000") return item.price < 150000
    return true
  })

  return (
    <>
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

      <div className="w-full">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-['Javanese_Text'] font-normal text-[44px] leading-[52px] tracking-normal text-center uppercase">
            COLLECTION
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-6 md:px-16 pb-1">
  
  {/* View Icons */}
  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
    <span className="font-normal text-[12px] leading-[22px] tracking-normal uppercase">
      View as
    </span>

    <div className="flex items-center">
      <button onClick={() => setView("list")} className="p-1">
        <Image src="/icons/solar_hamburger1.png" alt="" width={25} height={25}
          className={`transition ${view==="list" ? "brightness-0" : "opacity-60"}`} />
      </button>

      <button onClick={() => setView("grid2")} className="p-1">
        <Image src="/icons/solar_hamburger2.png" alt="" width={20} height={20}
          className={`transition ${view==="grid2" ? "brightness-0" : "opacity-60"}`} />
      </button>

      <button onClick={() => setView("grid3")} className="p-1">
        <Image src="/icons/solar_hamburger3.png" alt="" width={26} height={26}
          className={`transition ${view==="grid3" ? "brightness-0" : "opacity-60"}`} />
      </button>

      <button onClick={() => setView("grid4")} className="p-1">
        <Image src="/icons/solar_hamburger4.png" alt="" width={27} height={27}
          className={`transition ${view==="grid4" ? "brightness-0" : "opacity-60"}`} />
      </button>
    </div>
  </div>

  {/* Sort Controls */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-9 w-full md:w-auto">
    
    <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
      <span className="font-normal text-[12px] leading-[22px] tracking-normal uppercase whitespace-nowrap">
        SORT BY PRICE
      </span>
      <select
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value)}
        className="bg-transparent px-2 py-2 outline-none w-[140px] sm:w-auto"
      >
        <option>30000</option>
        <option>Under ₹50,000</option>
        <option>Under ₹80,000</option>
        <option>Under ₹1,50,000</option>
      </select>
    </div>

    <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto">
      <span className="font-normal text-[12px] leading-[22px] tracking-normal uppercase whitespace-nowrap">
        SORT BY
      </span>
      <select
        value={dateSort}
        onChange={(e) => setDateSort(e.target.value)}
        className="bg-transparent px-2 py-2 outline-none w-[140px] sm:w-auto font-normal text-[12px] leading-[22px] tracking-normal uppercase"
      >
        <option>Date, Old To New</option>
        <option>Date, New To Old</option>
        <option>Popularity</option>
      </select>
    </div>

  </div>
</div>
      </div>

      <div className="min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10">

          <div className={`
            grid gap-x-5 gap-y-12
            ${view==="grid4"?"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":""}
            ${view==="grid3"?"grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3":""}
            ${view==="grid2"?"grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2":""}
            ${view==="list"?"grid-cols-1":""}
          `}>
            {filteredProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-white">
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

                <div className="pt-4">
                  <h3 className="font-sans text-[17px] font-normal">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1">
                    <div className="text-[#f4b400] text-xl tracking-wide">★★★★★</div>
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

                  <button className="mt-4 text-md border border-[#C1A58B] rounded-md px-5 py-2 hover:bg-black hover:text-white transition">
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