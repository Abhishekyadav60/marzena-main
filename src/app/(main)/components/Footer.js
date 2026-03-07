"use client";

import Image from "next/image";
import { footerData } from "@/data/products";

export default function Footer() {
  const { decorations, brand, links, newsletter, payments } = footerData;

  return (
    <footer className="relative bg-[rgba(250,238,227,1)] overflow-hidden shadow-[0_-10px_25px_rgba(200,180,160,0.3)]">

      {/* Desktop Decorative Images (Same as before) */}
      <Image
        src={decorations.right}
        alt="decor"
        width={800}
        height={200}
        className="hidden md:block absolute rotate-170 right-[800px] w-[800px] h-[370px] top-25 scale-y-[-1] opacity-15 pointer-events-none"
      />
   
      <Image
        src={decorations.right}
        alt="decor"
        width={800}
        height={200}
        className="hidden md:block absolute rotate-120 left-[450px] top-10 scale-y-[-1] opacity-15 pointer-events-none"
      />

      <Image
        src={decorations.right}
        alt="decor"
        width={800}
        height={200}
        className="hidden md:block absolute rotate-170 left-[100px] top-80 scale-y-[-1] opacity-15 pointer-events-none"
      />

      <Image
        src={decorations.right}
        alt="decor"
        width={800}
        height={200}
        className="hidden md:block absolute left-[770px] top-35 opacity-30 pointer-events-none"
      />

      {/* Mobile Flowers */}


<Image
  src={decorations.right}
  alt="decor"
  width={800}
  height={500}
  className="md:hidden absolute -left-[10vw] top-0 w-[800px] max-w-[500px]  rotate-40 opacity-20 pointer-events-none"
/>

<Image
  src={decorations.right}
  alt="decor"
  width={800}
  height={300}
  className="md:hidden absolute -right-[1px] bottom-0 w-[500px] max-w-[500px] rotate- opacity-20 pointer-events-none"
/>

<Image
  src={decorations.right}
  alt="decor"
  width={800}
  height={450}
  className="md:hidden absolute left-1/2 -translate-x-1/2 top-[30%] w-[600px] max-w-[600px] rotate-90 opacity-15 pointer-events-none"
/>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">

        {/* Brand Section */}
        <div>
          <Image
            src={brand.logo}
            alt="brand"
            width={150}
            height={60}
            className="mb-4"
          />

          <p className="mt-4 text-md text-[#5a5a5a]">
            {brand.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {brand.socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition"
              >
                <Image
                  src={social.icon}
                  alt="social"
                  width={32}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {links.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold pl-5 text-[#2f2f2f] mb-4">
              {section.title}
            </h3>

            <ul className="space-y-2 pl-5 text-sm text-[#5a5a5a]">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-black cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#2f2f2f] mb-4">
            {newsletter.title}
          </h3>

          <p className="text-sm text-[#5a5a5a] mb-4">
            {newsletter.description}
          </p>

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 rounded-md bg-[#C1A58B] text-white placeholder-white outline-none"
          />

          <button className="w-full mt-3 py-3 rounded-md cursor-pointer bg-white text-[#2f2f2f] font-medium hover:bg-[#2f2f2f] hover:text-white transition">
            Subscribe
          </button>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-[#d6ccc3] z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5a5a5a]">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()}, All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 items-center">
            {payments.map((card, i) => (
              <Image
                key={i}
                src={card}
                alt="payment"
                width={60}
                height={30}
                className="h-8 w-auto"
              />
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}