"use client";
import { useState } from "react";
import { orderSummaryData } from "@/data/products";

export default function OrderSummary({ cart }) {
  const [coupon, setCoupon] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // DISCOUNT 
  let discount = 0;
  if (coupon === "SAVE10") {
    discount = subtotal * 0.1;
  }

  const total = subtotal - discount;

  // CHECKOUT LOGIC
  const handleCheckout = () => {
    if (!checked) {
      setError(orderSummaryData.error);
      return;
    }

    setError("");

    // Yaha actual checkout ka logic aayega
    alert("Proceeding to Checkout");

    // Example:
    // router.push("/checkout");
  };

 return (
  <div className="w-full max-w-[400px] rounded-lg p-6 h-fit sticky top-6 bg-white">

    <h2 className="text-[14px] tracking-[1px] font-normal text-[26px] leading-[32px] text-[#C1A58B] pb-2 border-b border-[#EF9491]">
      {orderSummaryData.title}
    </h2>

    <div className="flex justify-between border-b border-[#C1A58B] pb-3 items-center mt-4 text-[14px]">
      <span className="text-[#202020] font-normal text-[22px] leading-[28px] ">
        {orderSummaryData.subtotal}
      </span>
      <span className="text-[#202020] font-medium">
        ₹{subtotal}
      </span>
    </div>

    {/* COUPON */}
    <div className="mt-3">
      <p className="mb-2 text-[#202020] font-normal text-[18px] leading-[26px]">
        Coupon Code
      </p>

      <input
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder={orderSummaryData.couponPlaceholder}
        className="w-full border border-[#EF9491] px-3 py-2 text-[16px] outline-none placeholder:text-[#C1A58B]"
      />

      <p className="mt-1 font-normal text-[17px] leading-[22px]">
        Coupon code will be applied on the checkout page
      </p>
    </div>

    {/* DISCOUNT */}
    {discount > 0 && (
      <p className="text-green-600 text-[12px] mt-2">
        Discount Applied: -₹{discount}
      </p>
    )}

    {/* TOTAL */}
    <div className="flex justify-between items-center mt-5 pt-3 border-t border-[#C1A58B]">
      <span className="text-[20px] leading-[28px] text-[#252525] font-normal">
        {orderSummaryData.total}
      </span>
      <span className="text-[16px] text-[#202020] leading-[24px] font-medium">
        ₹{total}
      </span>
    </div>

    {/* NOTE */}
    <div className="mt-3 border-t border-[#C1A58B]">
    <p className="text-[17px] mt-4 leading-[22px]">
      {orderSummaryData.note}
    </p>
    </div>

    {/* TERMS */}
    <div className="flex items-start gap-2 mt-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setError("");
        }}
        className="mt-[5px] w-[16px] h-[16px] cursor-pointer"
      />

      <p className="text-[17px] text-[#202020] leading-[24px]">
        I agree with{" "}
        <span className="underline cursor-pointer">
          Terms and Conditions
        </span>
      </p>
    </div>

    {/* ERROR */}
    {error && (
      <p className="text-red-500 text-[11px] mt-2">
        {error}
      </p>
    )}

    {/* BUTTON */}
    <button
      onClick={handleCheckout}
      className="bg-[#C1A58B] text-white w-full py-2.5 mt-8 cursor-pointer rounded-md text-[14px] font-medium hover:opacity-90 transition"
    >
      {orderSummaryData.button}
    </button>
  </div>
);
}