"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

import { MdCollections, MdOutlineDashboard, MdPreview, MdProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbBrandSketch } from "react-icons/tb";

export default function Sidebar() {

    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", link: "/admin", icon: <MdOutlineDashboard /> },
        { name: "Products", link: "/admin/products", icon: <MdProductionQuantityLimits /> },
        { name: "Orders", link: "/admin/orders" },
        { name: "Categories", link: "/admin/categories" },
        { name: "Brands", link: "/admin/brands", icon: <TbBrandSketch /> },
        { name: "Customers", link: "/admin/customers", icon: <FaRegUser /> },
        { name: "Reviews", link: "/admin/reviews", icon: <MdPreview /> },
        { name: "Collections", link: "/admin/collections", icon: <MdCollections /> }
    ];

    return (
        <section className="bg-white w-64 flex flex-col gap-10 border-r px-5 py-3 h-screen">
          
          <div className="flex justify-center">
            {/* <Image
              src="/icons/brand-logo.png"
              alt="Logo"
              width={160}
              height={50}
            /> */}
          </div>

          <ul className="flex-1 flex flex-col gap-5">
            {menuItems?.map((item, index) => (
                <Tab key={index} item={item} pathname={pathname} />
            ))}
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer font-semibold">
            Logout
          </button>
        </section>
    )
}

function Tab({ item, pathname }) {

    const isSelected = pathname === item.link;

    return (
        <li>
            <Link
              href={item.link}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold
              ${isSelected ? "bg-blue-300 text-white" : "bg-white text-black"}`}
            >
                {item.icon} {item.name}
            </Link>
        </li>
    );
}