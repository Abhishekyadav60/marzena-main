"use client";
import Link from "next/link";

export default function PrimaryButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-8 py-3 rounded-md cursor-pointer uppercase tracking-widest transition inline-block text-center";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    gold: " bg-gradient-to-r from-[#C58331] to-[#F5CF7B] text-black",
    light: "bg-white text-black hover:bg-gray-200",
    goldSoft: "bg-[#C1A58B] text-white",
  };

  const styles = `${base} ${variants[variant]} ${className}`;
  if (typeof href === "string") {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}