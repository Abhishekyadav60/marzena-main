
"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { homeData } from "@/data/products";
import { heroData } from "@/data/products";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/app/(main)/components/PrimaryButton";
import InstagramPage from "@/app/(main)/components/InstagramPage";
import HeroSection from "@/app/(main)/components/HeroSection";


export default function Home() {
  const {
    collections,
    marquee,
    bestSellers,
    banner,
    categories,
    reviews,
    features,
  } = homeData;

  const router = useRouter();

  return (
    <>
       <HeroSection hero={heroData} PrimaryButton={PrimaryButton} />

      {/* COLLECTIONS */}
      <section className="relative bg-orange-50 py-16 px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-serif text-[#2f2f2f]">
            {collections.heading}
          </h2>
          <Link 
          href="/dashboard/collection"
           className="text-md underline font-semibold text-[#2f2f2f]">
            {collections.button}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.items.slice(0, 2).map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className={`rounded-xl w-full ${item.height} object-cover`}
              />
              <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
                {item.title}
              </h3>
            </div>
          ))}

          <div className="flex flex-col gap-8">
            {collections.items.slice(2, 4).map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className={`rounded-xl w-full ${item.height} object-cover object-[50%_30%]`}
                />
                <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
       <section className="bg-white overflow-hidden py-12">
      <div className="whitespace-nowrap animate-marquee text-black text-4xl font-semibold">
        {marquee.text.map((t, i) => (
          <span key={i} className="mr-10">
            {t} •
          </span>
        ))}
      </div>
    </section>

      {/* BEST SELLERS */}
    <section className="relative bg-[rgba(250,238,227,1)] py-16 px-6 md:px-12 ">
    <div className="flex justify-between items-center mb-12">
    <h2 className="text-3xl font-serif text-[#2f2f2f]">
      {bestSellers.heading}
    </h2>

    {/* Flower */}
    <Image
      src="/icons/flower.png"
      alt="flower"
      width={464}
      height={453}
      className="absolute rotate-[50deg] scale-x-[-1] opacity-30 top-[-300px] right-[1220px] pointer-events-none"
    />

    <button className="text-md underline text-[#2f2f2f]">
      {bestSellers.button}
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
    {bestSellers.items.map((item, index) => (
      
        <div key={item.id || index} className="group">

          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={600}
              onClick={() => {
             localStorage.setItem("selectedProduct", JSON.stringify(item));
             router.push(`/dashboard/product/${item.id}`);
              }}
              className="w-full h-[470px] object-cover object-[50%_30%] cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />

            <span className="absolute top-0 left-0 rounded-tl-md bg-black text-white text-xs px-3 py-1">
              {item.tag}
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-800">
            {item.name}
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-2">{item.rating}</span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold text-lg">₹{item.price.toLocaleString()}</span>
            <span className="line-through text-gray-500 text-sm">
              ₹{item.oldPrice.toLocaleString()}
            </span>
            {/* <span className="text-sm text-gray-600">
              {item.discount}
            </span> */}

             <span className="text-sm text-gray-600">
              {item.discount}% off
              </span>
          </div>

          <div className="flex gap-2 p-3">
            <div className="w-4 h-4 rounded-full bg-pink-400"></div>
            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-900"></div>
          </div>

        </div>

    ))}
  </div>
</section>

{/* why section */}
       <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-10">
          {homeData.whySection.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeData.whySection.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#e8e0d6] rounded-xl p-10 md:p-14 text-center flex flex-col items-center transition hover:shadow-lg"
            >
              <div className="flex justify-center mb-5">
                <FaStar className="text-yellow-400 text-5xl md:text-6xl" />
              </div>

              <h3 className="font-semibold text-lg md:text-xl mb-4 text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm md:text-md text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* BANNER */}
      <section className="w-full relative overflow-hidden">
        <Image
          src={banner.image}
          alt="banner"
          width={1920}
          height={600}
          className="w-full h-[300px] md:h-[600px] object-cover object-[center_20%]"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-end justify-center text-center px-6 pb-10 md:pb-20">
          <div className="max-w-lg">
            <h1 className="text-2xl md:text-5xl text-white mb-6 font-javanese">
              {banner.title}
            </h1>
            <PrimaryButton  className="font-semibold" variant="light">
              {banner.button}
            </PrimaryButton>
          </div>
        </div>
      </section>

    {/* CATEGORY */}
     <section className="w-full bg-white py-10 overflow-hidden">
     <div className="max-w-[1400px] mx-auto flex flex-col gap-5">
    {categories.map((cat) => (
      <div
        key={cat.id}
        className={`flex flex-col md:flex-row ${
          cat.reverse ? "md:flex-row-reverse" : ""
        } items-stretch w-full`}
      >
        {/* Image Box */}
        <div className="w-full md:w-1/2">
        <Link href="/dashboard/catagorie">
          <Image
            src={cat.image}
            alt={cat.title}
            width={673}
            height={538}
            className="w-full h-[538px] rounded-lg object-cover object-[50%_30%]"
          />
          </Link>
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 md:p-24 text-center relative bg-white">

          {/* Flower Logic */}
          <Image
          src="/icons/flower-left.png"
       alt="flower"
       width={464}
       height={453}
       className={`absolute w-[438px] h-[429px] opacity-20 pointer-events-none
         ${
           cat.reverse
             ? "rotate-[95deg] scale-x-[-1] -top-[30px] -left-[190px]"   // Second row (left side)
             : "rotate-[285deg] top-[-30px] left-[420px]"   // First row (same as original)
         }
  `}
/>

          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-gray-800 mb-6 uppercase">
              {cat.title}
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              {cat.desc}
            </p>
              
              <Link href="/dashboard/catagorie">
            <PrimaryButton variant="primary">
              {banner.button}
            </PrimaryButton>
            </Link>

          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* REVIEWS */}
      <section className="bg-[rgba(250,238,227,1)] py-10 px-6 relative">
        <div className="max-w-8xl mx-auto grid md:grid-cols-4 gap-20 items-start">
          <div className="space-y-5 space mt-45 md:col-span-1">
            <h2 className="text-3xl font-serif text-gray-600">
              {reviews.heading}
            </h2>
            <p className="text-gray-600 text-md leading-6">
              {reviews.subtext}
            </p>
             <Image
                  src="/icons/flower.png"
                  alt="flower"
                  width={464}
                  height={453}
                  className="absolute rotate-[50deg] scale-x-[-1] opacity-30 top-[140px] right-[1170px] pointer-events-none"
                />
            <a
              href="#"
              className="underline text-gray-800 text-xl font-medium"
            >
              {reviews.button}
            </a>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {reviews.items.map((item) => (
              <div key={item.id} className="space-y-4">
                <Image
                  src={item.image}
                  alt="review"
                  width={400}
                  height={290}
                  className="w-full h-[290px] object-cover object-[50%_30%] rounded-xl"
                />

                <div className="flex gap-6 text-yellow-400 text-3xl">
                  ★ ★ ★ ★ ★
                </div>

                <p className="font-inter text-[17px] leading-[24px] text-[#535353]">
                  {item.text}
                </p>
                <p className="text-[#535353] text-base font-normal">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-17 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((f) => (
            <div key={f.id} className="space-y-3">
              <Image
                src={f.image}
                alt={f.title}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto"
              />
              <h1 className="text-2xl font-bold">{f.title}</h1>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <InstagramPage/>
    </>
  );
}