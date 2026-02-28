import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import { homeData } from '@/data/products';

const { instagram } = homeData;

const InstagramPage = () => {
  return (
    <section className="bg-[rgba(250,238,227,1)] py-24">
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-6 px-4">
            <div className="h-[1px] bg-[#9c8f82] w-36 md:w-150"></div>
            <h2 className="font-serif text-xl text-[#2f2f2f]">
              {instagram.heading}
            </h2>
            <div className="h-[1px] bg-[#9c8f82] w-36 md:w-150"></div>
          </div>

          <p className="text-[#5e5e5e] mb-12 px-4">
            {instagram.subtext}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {instagram.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="instagram"
                width={300}
                height={400}
                className="w-full rounded-xl aspect-[3/4] object-cover"
              />
            ))}
          </div>

          <div className="mt-14">
            <div className="mt-14">
             <PrimaryButton
            href={instagram.button.link}
             variant="goldSoft" className="text-white "
              >
             {instagram.button.text}
             </PrimaryButton>
             </div>
          </div>
        </div>
      </section>
  )
}

export default InstagramPage
