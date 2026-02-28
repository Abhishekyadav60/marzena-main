"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { menuItems } from "@/data/products"; 

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full relative overflow-hidden">

      {/* Flower Images */}
      <Image
        src="/icons/flower-top.png"
        alt="flower"
        width={464}
        height={453}
        className="absolute rotate-[70deg] top-[-128] right-[1094px] scale-x-[-1] opacity-20 pointer-events-none"
      />

      <Image
        src="/icons/flower-right.png"
        alt="flower"
        width={464}
        height={453}
        className="absolute w-[570px] h-[274px] rotate-[-38deg] top-[-10px] left-[1020px] opacity-20 pointer-events-none"
      />

      {/* Logo Center */}
      <div className="max-w-7xl mx-auto flex justify-center py-4 relative z-10">
        <Link href="/">
          <Image
            src="/icons/brand-logo.png"
            alt="Logo"
            width={160}
            height={50}
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 relative z-20">
        <div className="hidden md:flex justify-between items-center">

          {/* Left Menu */}
          <div className="flex gap-9 text-zinc-800 font-sans">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`hover:text-gray-500 transition ${
                  pathname === item.path
                    ? "font-bold border-b-2 border-zinc-800"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard/profile">
              <Image src="/icons/user.png" alt="user" width={24} height={24} />
            </Link>
            <Link href="/wishlist">
              <Image src="/icons/hart.png" alt="wishlist" width={24} height={24} />
            </Link>
            <Link href="/cart">
              <Image src="/icons/cart.png" alt="cart" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center">

          {/* Right Icons */}
          <div className="flex gap-6">
            <Link href="/profile">
              <Image src="/icons/user.png" alt="user" width={24} height={24} />
            </Link>
            <Link href="/wishlist">
              <Image src="/icons/hart.png" alt="wishlist" width={24} height={24} />
            </Link>
            <Link href="/cart">
              <Image src="/icons/cart.png" alt="cart" width={24} height={24} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 space-y-3 text-center bg-white shadow-md">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 border-b border-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}