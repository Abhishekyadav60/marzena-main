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
        className="absolute rotate-[70deg] top-[-128px] right-[1099px] scale-x-[-1] opacity-20 pointer-events-none"
      />

      <Image
        src="/icons/flower-right.png"
        alt="flower"
        width={464}
        height={453}
        className="absolute w-[570px] h-[274px] rotate-[-38deg] top-[-20px] left-[1020px] opacity-20 pointer-events-none"
      />
{/* mobile */}
  <Image
  src="/icons/flower-top.png"
  alt="flower"
  width={800}
  height={350}
  className="md:hidden absolute -left-[25vw] -top-[40px] w-[400px] max-w-[360px] rotate-[50deg] opacity-20 pointer-events-none"
/>

<Image
  src="/icons/flower-right.png"
  alt="flower"
  width={800}
  height={350}
  className="md:hidden absolute -right-[20vw] top-[10px] w-[400px] max-w-[340px] rotate-[35deg] opacity-20 pointer-events-none"
/>

      {/* Logo Center */}
      <div className="max-w-7xl mx-auto flex justify-center py-4 relative z-10">
        <Link href="/dashboard">
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
            {/* <Link href="/dashboard/profile"> */}
            <Link href="/dashboard/profile">
              <Image src="/icons/user.png" alt="user" width={24} height={24} />
            </Link>
            <Link href="/dashboard/wishlist">
              <Image src="/icons/hart.png" alt="wishlist" width={24} height={24} />
            </Link>
            <Link href="/dashboard/cart">
              <Image src="/icons/cart.png" alt="cart" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center">

          {/* Right Icons */}
          <div className="flex gap-6">
            <Link href="/dashboard/profile">
              <Image src="/icons/user.png" alt="user" width={24} height={24} />
            </Link>
            <Link href="/dashboard/wishlist">
              <Image src="/icons/hart.png" alt="wishlist" width={24} height={24} />
            </Link>
            <Link href="/dashboard/cart">
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



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);
//   const [headerSettings, setHeaderSettings] = useState(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const fetchHeader = async () => {
//       try {
//         const res = await fetch("/api/header");
//         const data = await res.json();

//         console.log("HEADER DATA:", data);

//         setMenuItems(data?.menuItems || []);
//         setHeaderSettings(data?.headerSettings || {});
//       } catch (error) {
//         console.error("Header fetch error:", error);
//       }
//     };

//     fetchHeader();
//   }, []);

//   if (!headerSettings) {
//     return <div className="h-24 w-full bg-white animate-pulse" />;
//   }

//   return (
//     <header className="w-full relative overflow-hidden">
      
//       {/* Flower Images */}
//       {headerSettings.flowerTop && (
//         <Image
//           src={headerSettings.flowerTop}
//           alt="flower"
//           width={464}
//           height={453}
//           className="absolute rotate-[70deg] top-[-128px] right-[1094px] scale-x-[-1] opacity-20 pointer-events-none"
//         />
//       )}

//       {headerSettings.flowerRight && (
//         <Image
//           src={headerSettings.flowerRight}
//           alt="flower"
//           width={464}
//           height={453}
//           className="absolute w-[570px] h-[274px] rotate-[-38deg] top-[-10px] left-[1020px] opacity-20 pointer-events-none"
//         />
//       )}

//       {/* Logo */}
//       <div className="max-w-7xl mx-auto flex justify-center py-4 relative z-10">
//         <Link href="/">
//           {headerSettings.logo && (
//             <Image
//               src={headerSettings.logo}
//               alt="Logo"
//               width={160}
//               height={50}
//             />
//           )}
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-3 relative z-20">
        
//         {/* Desktop */}
//         <div className="hidden md:flex justify-between items-center">
          
//           {/* Menu */}
//           <div className="flex gap-9 text-zinc-800 font-sans">
//             {menuItems.length > 0 ? (
//               menuItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.path}
//                   className={`hover:text-gray-500 transition ${
//                     pathname === item.path
//                       ? "font-bold border-b-2 border-zinc-800"
//                       : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))
//             ) : (
//               <span>No Menu</span>
//             )}
//           </div>

//           {/* Icons */}
//           <div className="flex items-center gap-6">
//             {headerSettings.userIcon && (
//               <Link href="/dashboard/profile">
//                 <Image
//                   src={headerSettings.userIcon}
//                   alt="user"
//                   width={24}
//                   height={24}
//                 />
//               </Link>
//             )}

//             {headerSettings.wishlistIcon && (
//               <Link href="/wishlist">
//                 <Image
//                   src={headerSettings.wishlistIcon}
//                   alt="wishlist"
//                   width={24}
//                   height={24}
//                 />
//               </Link>
//             )}

//             {headerSettings.cartIcon && (
//               <Link href="/cart">
//                 <Image
//                   src={headerSettings.cartIcon}
//                   alt="cart"
//                   width={24}
//                   height={24}
//                 />
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile */}
//         <div className="flex md:hidden justify-between items-center">
//           <div className="flex gap-6">
//             {headerSettings.userIcon && (
//               <Image
//                 src={headerSettings.userIcon}
//                 alt="user"
//                 width={24}
//                 height={24}
//               />
//             )}
//           </div>

//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="text-2xl"
//           >
//             {mobileOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="md:hidden mt-4 space-y-3 text-center bg-white shadow-md">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className="block px-6 py-4 border-b border-gray-100"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }