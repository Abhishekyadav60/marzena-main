// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Truck, Heart } from "lucide-react";
// import PrimaryButton from "@/app/(main)/components/PrimaryButton";
// import OrderSummary from "@/app/(main)/components/cart/OrderSummary";


// import {
//   cartPageData,
//   initialCart,
//   suggestedProducts,
//   productData,
//   relatedSectionData
// } from "@/data/products";

// const data = relatedSectionData;


// export default function CartPage() {
//    const [timeLeft, setTimeLeft] = useState(getRemainingTime());

//    const [cart, setCart] = useState(() => {
//   if (typeof window !== "undefined") {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : initialCart;
//   }
//   return initialCart;
// });

// const [mounted, setMounted] = useState([])

//  useEffect(() => {
//     setMounted(true);

//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // ✅ FIX HERE (before UI render)
//   if (!mounted) {
//     return <p>Loading cart...</p>;
//   }

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
  

// const remaining = Math.max(
//   cartPageData.freeShipping.targetAmount - subtotal,
//   0
// );


//   const target = 3200;
//   const progress = Math.min((subtotal / target) * 100, 100);

//   // LOGIC
//   const inc = (id) => {
//     setCart((prev) =>
//       prev.map((i) =>
//         i.id === id ? { ...i, quantity: i.quantity + 1 } : i
//       )
//     );
//   };

//   const dec = (id) => {
//     setCart((prev) =>
//       prev.map((i) =>
//         i.id === id && i.quantity > 1
//           ? { ...i, quantity: i.quantity - 1 }
//           : i
//       )
//     );
//   };

//   // const remove = (id) => {
//   //   setCart((prev) => prev.filter((i) => i.id !== id));
//   // };

//   const remove = (id) => {
//   const updatedCart = cart.filter((item) => item.id !== id);

//   setCart(updatedCart);
//   localStorage.setItem("cart", JSON.stringify(updatedCart));
//   toast.error("Item removed from cart");

//   window.dispatchEvent(new Event("cartUpdated"));
// };

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const exist = prev.find((i) => i.id === product.id);
//       if (exist) {
//         return prev.map((i) =>
//           i.id === product.id
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       }
//       return [{ ...product, quantity: 1 }, ...prev];
//     });
//   };


//    // DeliveryInfo
//     function getRemainingTime() {
//       const now = new Date();
//       const cutoff = new Date();
  
//       cutoff.setHours(now.getHours() + (productData.deliveryData?.cutoffHours));
  
//       const diff = cutoff - now;
  
//       const hours = Math.floor(diff / (1000 * 60 * 60));
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
  
//       return { hours, minutes };
//     }

//    function getDeliveryDate() {
//       const date = new Date();
//       date.setDate(date.getDate() + (productData.deliveryData?.deliveryDays));
  
//       return date.toLocaleDateString("en-US", {
//         weekday: "long",
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       });
//     }

//      useEffect(() => {
//         const timer = setInterval(() => {
//           setTimeLeft(getRemainingTime());
//         }, 60000);
    
//         return () => clearInterval(timer);
//       }, []);

//        useEffect(() => {
//        localStorage.setItem("cart", JSON.stringify(cart));
//        }, [cart]);

//   return (
//     <>
//     <div className="max-w-[1440px] mx-auto p-6 text-[#202020]">

//       {/* HEADER */}
//       <h1 className="font-normal text-[50px] leading-[58px] mb-4">
//         {cartPageData.header}
//       </h1>

//       {/* PROGRESS */}
//       <div className="mb-2">
//        <div className=" relative w-full h-[15px] bg-[#e6e6e6] rounded-full overflow-hidden">
//       <div className="h-full bg-[#6FCF97] rounded-full transition-all duration-500"
//       style={{ width: `${progress}%` }}
//     />

//      <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
//       style={{ left: `calc(${progress}% - 12px)` }}
//     >

//       <Image
//         src="/icons/truck.png" 
//         width={24}
//         height={24}
//         alt="truck"
//       />
//         </div>
//         </div>
        
//          <p className="text-[18px] leading-[28px] mt-5 text-[#6B6B6B]">
//          {cartPageData.freeShipping.prefix}{" "}
//         <span className="text-black font-semibold">
//          ₹110
//         </span>{" "}
//         {cartPageData.freeShipping.suffix}{" "}
//          <span className="text-black font-medium">
//          {cartPageData.freeShipping.highlight}
//        </span>
//         </p>
     

//     <div className="bg-[#C1A58B] flex items-center justify-center gap-16 text-white mt-6 px-4 py-2 rounded-lg mb-4 text-[17px]">
//           <Image
//             src="/icons/capa.png"   
//             width={22}
//             height={22}
//             alt="icon"
//           />
//           <span>{cartPageData.hurryText}</span>
//         </div>

  
//       <div className="grid grid-cols-[1.9fr_1.3fr] gap-10 mt-12 items-start">

//         <div className="w-full">
//           <div className="bg-[#C1A58B] grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] items-center text-white px-6 py-2 rounded-t-lg text-[16px]">
//             <span>Product</span>
//             <span className="text-center">Price</span>
//             <span className="text-center">Quantity</span>
//             <span className="text-center">Total</span>
//             <span></span>
//           </div>

//           {/* CART ITEMS */}
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] items-center border border-[#E0DED7] px-6 py-4"
//             >
//               <div className="flex gap-3 items-center">
//                 <div className="overflow-hidden w-[70px] h-[70px] rounded-md">
//                   <Image
//                     src={item.image}
//                     width={70}
//                     height={70}
//                     alt=""
//                     className="object-cover hover:scale-110 transition"
//                   />
//                 </div>

//                 <div>
//                   <h2 className="text-[16px] font-medium">
//                     {item.name}
//                   </h2>
//                   <p className="text-[14px] text-gray-500">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>

//               {/* PRICE */}
//               <div className="flex items-center justify-center gap-2">
//                 <p className="line-through text-[12px] text-gray-400">
//                   ₹{item.oldPrice}
//                 </p>
//                 <p className="text-[16px]">₹{item.price}</p>
//               </div>

//               {/* QTY */}
//               <div className="flex justify-center">
//                 <div className="flex items-center border border-[#EF9491] rounded-md h-[40px] overflow-hidden">
//                   <button
//                     onClick={() => dec(item.id)}
//                     className="w-[36px] h-full flex items-center justify-center text-[18px] cursor-pointer"
//                   >
//                     -
//                   </button>

//                   <span className="w-[36px] text-center">
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() => inc(item.id)}
//                     className="w-[36px] h-full flex items-center justify-center text-[18px] cursor-pointer"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* TOTAL */}
//               <div className="text-center font-medium">
//                 ₹{item.price * item.quantity}
//               </div>

//               <div className="flex justify-center">
//                 <button onClick={() => remove(item.id)}>
//                   <img
//                     src="/icons/delete.png"
//                     alt="delete"
//                     className="w-4 h-4 cursor-pointer"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* DELIVERY */}
//           <div className="flex items-center gap-2 mt-4 text-[#202020] font-normal text-[14px] leading-[22px]">
//                   <Truck size={18} />
//                   <p>
//                     Order in the next{" "}
//                     <span className="font-bold">
//                       {timeLeft.hours} hours {timeLeft.minutes} minutes
//                     </span>{" "}
//                     to get it by{" "}
//                     <span className="font-bold uppercase">
//                       {getDeliveryDate()}
//                     </span>
//                   </p>
//                 </div>

//           {/* GIFT */}
//         <div className="flex gap-14 items-center mt-10">
//           <p className="flex items-center gap-4 text-[14px] font-normal leading-[22px] text-[#202020]">
//             <Image src="/icons/gift.png" alt="gift" width={20} height={20} />
//             {cartPageData.giftText}
//           </p>

//           <PrimaryButton variant="goldSoft" className="rounded-lg">
//             Add
//           </PrimaryButton>

//         </div>

//           {/* SUBTOTAL */}
//           <div className="flex justify-between mt-7 font-normal text-[20px] leading-[24px]">
//             <span>Subtotal</span>
//             <span className="font-semibold text-[30px] leading-[38px] text-center">₹{subtotal}</span>
//           </div>

//          <div className="font-normal text-[14px] leading-[22px] text-[#766C6C]"> 
//           {cartPageData.taxes} 
//           </div>

//           {/* SUGGESTED */}
//           <h2 className="mt-6 font-normal text-[20px] leading-[24px]">
//             {cartPageData.youMayAlsoLike}
//           </h2>

//           {suggestedProducts.map((item) => (
//              <div
//               key={item.id}
//               className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] mt-4 items-center border border-[#C1A58B] rounded-lg px-6 py-4"
//             >
//               <div className="flex gap-3 items-center">
//                 <div className="overflow-hidden w-[70px] h-[70px]">
//                   <Image
//                     src={item.image}
//                     width={70}
//                     height={70}
//                     alt=""
//                     className="object-cover hover:scale-110 transition"
//                   />
//                 </div>

//                 <div>
//                   <h2 className="text-[16px] font-medium">
//                     {item.name}
//                   </h2>
//                   <p className="text-[14px] text-gray-500">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>

//               {/* PRICE */}
//               <div className="flex items-center justify-center gap-2">
//                 <p className="line-through text-[14px] text-gray-400">
//                   ₹{item.oldPrice}
//                 </p>
//                 <p className="text-[18px]">₹{item.price}</p>
//               </div>

//               {/* QTY */}
//               <div className="flex justify-center">
//                 <div className="flex items-center border border-[#EF9491] rounded-md h-[40px] overflow-hidden">
//                   <button
//                     onClick={() => dec(item.id)}
//                     className="w-[36px] h-full flex items-center justify-center text-[24px] cursor-pointer"
//                   >
//                     -
//                   </button>

//                   <span className="w-[36px] text-center">
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() => inc(item.id)}
//                     className="w-[36px] h-full flex items-center justify-center text-[22px] cursor-pointer"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* TOTAL */}
//               <div className="text-center font-medium">
//                 ₹{item.price * item.quantity}
//               </div>

//               <div className="flex justify-center">
//                 <button onClick={() => remove(item.id)}>
//                   <img
//                     src="/icons/delete.png"
//                     alt="delete"
//                     className="w-4 h-4 cursor-pointer"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}

//            <div className="mt-10">
//              <div className="flex items-center gap-4 justify-center mb-6">
//             <div className="flex-1 border-t border-[#949191]"></div>
          
//             <p className="text-[18px] font-normal leading-6 text-gray-700">
//                Guaranteed Safe Checkout
//             </p>
          
//              <div className="flex-1 border-t border-[#949191]"></div>
//           </div>
          
//           {/* Payment Icons */}
//           <div className="flex flex-wrap justify-center gap-13">
          
//             {productData.payments.slice(3, 10).map((icon, index) => (
//               <div
//                 key={index}
//                 className="w-[68px] h-[42px] flex items-center justify-center border rounded-md px-3 py-1"
//               >
//                 <Image
//                   src={icon}
//                   alt="payment"
//                  width={icon.includes("paypal") ? 30 : 40}
//                  height={icon.includes("paypal") ? 16 : 30}
//                   className="object-contain cursor-pointer "
//                 />
//               </div>
//             ))}
          
//           </div>
//         </div>
//          </div>

//         {/* RIGHT */}
//         <OrderSummary cart={cart} />
//       </div>
//     </div>
//     </div>

//      <div className="max-w-[1250px] mx-auto px-6 mt-26">
//       <div className="flex justify-between mb-12">
//         <h2 className="text-[#C1A58B] font-calluna text-[50px] leading-[58px] tracking-[0.02em] capitalize">
//           {data.title}
//         </h2>
//         <button className="underline text-[20px] leading-[28px] cursor-pointer">
//           {data.viewAllText}
//         </button>
//       </div>

//       {/* GRID */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
//         {data.products.map((item) => (
//           <div key={item.id} className="group">
            
//             {/* IMAGE */}
//             <div className="relative h-[420px]">
//               {item.tag && (
//                  <span className="absolute top-0 left-0 bg-black text-white text-xs px-3 py-1 z-10">
//                  {item.tag}
//                 </span>
//                 )}
              
//               <Heart className="absolute top-1 right-4 text-white z-10" size={20} />

//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover object-[50%_10%]"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="mt-5">
//               <h3 className="font-calluna text-[16px] leading-[24px] tracking-[0]">{item.name}</h3>

//               <div className="flex items-center gap-2 text-sm mt-1">
//                 <span className="text-[#FFCE31] text-[18px]">★★★★★</span>
//                 <span className="text-gray-500">{item.rating}</span>
//               </div>

//               <div className="flex items-center gap-2 mt-1">
//                 <span className="font-opensans text-[16px] leading-[24px] tracking-[0]">₹{item.price}</span>
//                 <span className="line-through font-opensans text-[14px] leading-[22px] text-[#686666]">₹{item.oldPrice}</span>
//                 <span className="bg-[#C1A58B] text-white text-[12px] leading-[20px] px-2 py-1 rounded-xl">
//                   {item.discount}% off
//                 </span>
//               </div>
//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//     </>
//   );
// }






"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { Truck, Heart } from "lucide-react";
import PrimaryButton from "@/app/(main)/components/PrimaryButton";
import OrderSummary from "@/app/(main)/components/cart/OrderSummary";
import InstagramPage from "@/app/(main)/components/InstagramPage"


import {
  cartPageData,
  initialCart,
  suggestedProducts,
  productData,
  relatedSectionData
} from "@/data/products";

const data = relatedSectionData;


export default function CartPage() {
   const [timeLeft, setTimeLeft] = useState(null);

   const [cart, setCart] = useState([])

const [mounted, setMounted] = useState(false)

 useEffect(() => {
    setMounted(true);

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart(initialCart);
    }

    setTimeLeft(getRemainingTime());

    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    }, [cart, mounted]);

  // FIX HERE (before UI render)
  // if (!mounted) {
  //   return <p>Loading cart...</p>;
  // }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  

const remaining = Math.max(
  cartPageData.freeShipping.targetAmount - subtotal,
  0
);


  const target = 3200;
  const progress = Math.min((subtotal / target) * 100, 100);

  // LOGIC
  const inc = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const dec = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  // const remove = (id) => {
  //   setCart((prev) => prev.filter((i) => i.id !== id));
  // };

  const remove = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);

  setCart(updatedCart);
  toast.error("Item removed from cart");
  window.dispatchEvent(new Event("cartUpdated"));
};

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [{ ...product, quantity: 1 }, ...prev];
    });
  };


   // DeliveryInfo
    function getRemainingTime() {
      const now = new Date();
      const cutoff = new Date();
  
      // cutoff.setHours(now.getHours() + (productData.deliveryData?.cutoffHours));

      const hoursToAdd = productData.deliveryData?.cutoffHours ?? 0;
      cutoff.setHours(now.getHours() + hoursToAdd);
  
      const diff = cutoff - now;
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
  
      return { hours, minutes };
    }

   function getDeliveryDate() {
      const date = new Date();
      date.setDate(date.getDate() + (productData.deliveryData?.deliveryDays));
  
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    //  useEffect(() => {
    //     const timer = setInterval(() => {
    //       setTimeLeft(getRemainingTime());
    //     }, 60000);
    
    //     return () => clearInterval(timer);
    //   }, []);

      //  useEffect(() => {
      //  localStorage.setItem("cart", JSON.stringify(cart));
      //  }, [cart]);

  return (
    <>
    <div className="max-w-[1440px] mx-auto p-6 text-[#202020]">

      {/* HEADER */}
      <h1 className="font-normal text-[50px] leading-[58px] mb-4">
        {cartPageData.header}
      </h1>

      {/* PROGRESS */}
      <div className="mb-2">
       <div className=" relative w-full h-[15px] bg-[#e6e6e6] rounded-full overflow-hidden">
      <div className="h-full bg-[#6FCF97] rounded-full transition-all duration-500"
      style={{ width: `${progress}%` }}
    />

     <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
      style={{ left: `calc(${progress}% - 12px)` }}
    >

      <Image
        src="/icons/truck.png" 
        width={24}
        height={24}
        alt="truck"
      />
        </div>
        </div>
        
         <p className="text-[18px] leading-[28px] mt-5 text-[#6B6B6B]">
         {cartPageData.freeShipping.prefix}{" "}
        <span className="text-black font-semibold">
         ₹110
        </span>{" "}
        {cartPageData.freeShipping.suffix}{" "}
         <span className="text-black font-medium">
         {cartPageData.freeShipping.highlight}
       </span>
        </p>
     

    <div className="bg-[#C1A58B] flex items-center justify-center gap-16 text-white mt-6 px-4 py-2 rounded-lg mb-4 text-[17px]">
          <Image
            src="/icons/capa.png"   
            width={22}
            height={22}
            alt="icon"
          />
          <span>{cartPageData.hurryText}</span>
        </div>

  
      <div className="grid grid-cols-[1.9fr_1.3fr] gap-10 mt-12 items-start">

        <div className="w-full">
          <div className="bg-[#C1A58B] grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] items-center text-white px-6 py-2 rounded-t-lg text-[16px]">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Total</span>
            <span></span>
          </div>

          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] items-center border border-[#E0DED7] px-6 py-4"
            >
              <div className="flex gap-3 items-center">
                <div className="overflow-hidden w-[70px] h-[70px] rounded-md">
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    alt=""
                    className="object-cover hover:scale-110 transition"
                  />
                </div>

                <div>
                  <h2 className="text-[16px] font-medium">
                    {item.name}
                  </h2>
                  <p className="text-[14px] text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-2">
                <p className="line-through text-[12px] text-gray-400">
                  ₹{item.oldPrice}
                </p>
                <p className="text-[16px]">₹{item.price}</p>
              </div>

              {/* QTY */}
              <div className="flex justify-center">
                <div className="flex items-center border border-[#EF9491] rounded-md h-[40px] overflow-hidden">
                  <button
                    onClick={() => dec(item.id)}
                    className="w-[36px] h-full flex items-center justify-center text-[18px] cursor-pointer"
                  >
                    -
                  </button>

                  <span className="w-[36px] text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => inc(item.id)}
                    className="w-[36px] h-full flex items-center justify-center text-[18px] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="text-center font-medium">
                ₹{item.price * item.quantity}
              </div>

              <div className="flex justify-center">
                <button onClick={() => remove(item.id)}>
                  <img
                    src="/icons/delete.png"
                    alt="delete"
                    className="w-4 h-4 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          ))}

          {/* DELIVERY */}
          <div className="flex items-center gap-2 mt-4 text-[#202020] font-normal text-[14px] leading-[22px]">
                  <Truck size={18} />
                  <p>
                  Order in the next{" "}
                  <span className="font-bold">
                   {timeLeft?.hours ?? 0} hours {timeLeft?.minutes ?? 0} minutes
                   </span>
                  to get it by{" "}
                  <span className="font-bold uppercase">
                    {getDeliveryDate()}
                  </span>
                </p>
                </div>

          {/* GIFT */}
        <div className="flex gap-14 items-center mt-10">
          <p className="flex items-center gap-4 text-[14px] font-normal leading-[22px] text-[#202020]">
            <Image src="/icons/gift.png" alt="gift" width={20} height={20} />
            {cartPageData.giftText}
          </p>

          <PrimaryButton variant="goldSoft" className="rounded-lg">
            Add
          </PrimaryButton>

        </div>

          {/* SUBTOTAL */}
          <div className="flex justify-between mt-7 font-normal text-[20px] leading-[24px]">
            <span>Subtotal</span>
            <span className="font-semibold text-[30px] leading-[38px] text-center">₹{subtotal}</span>
          </div>

         <div className="font-normal text-[14px] leading-[22px] text-[#766C6C]"> 
          {cartPageData.taxes} 
          </div>

          {/* SUGGESTED */}
          <h2 className="mt-6 font-normal text-[20px] leading-[24px]">
            {cartPageData.youMayAlsoLike}
          </h2>

          {suggestedProducts.map((item) => (
             <div
              key={item.id}
              className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] mt-4 items-center border border-[#C1A58B] rounded-lg px-6 py-4"
            >
              <div className="flex gap-3 items-center">
                <div className="overflow-hidden w-[70px] h-[70px]">
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    alt=""
                    className="object-cover hover:scale-110 transition"
                  />
                </div>

                <div>
                  <h2 className="text-[16px] font-medium">
                    {item.name}
                  </h2>
                  <p className="text-[14px] text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-2">
                <p className="line-through text-[14px] text-gray-400">
                  ₹{item.oldPrice}
                </p>
                <p className="text-[18px]">₹{item.price}</p>
              </div>

              {/* QTY */}
              <div className="flex justify-center">
                <div className="flex items-center border border-[#EF9491] rounded-md h-[40px] overflow-hidden">
                  <button
                    onClick={() => dec(item.id)}
                    className="w-[36px] h-full flex items-center justify-center text-[24px] cursor-pointer"
                  >
                    -
                  </button>

                  <span className="w-[36px] text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => inc(item.id)}
                    className="w-[36px] h-full flex items-center justify-center text-[22px] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="text-center font-medium">
                ₹{item.price * item.quantity}
              </div>

              <div className="flex justify-center">
                <button onClick={() => remove(item.id)}>
                  <img
                    src="/icons/delete.png"
                    alt="delete"
                    className="w-4 h-4 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          ))}

           <div className="mt-10">
             <div className="flex items-center gap-4 justify-center mb-6">
            <div className="flex-1 border-t border-[#949191]"></div>
          
            <p className="text-[18px] font-normal leading-6 text-gray-700">
               Guaranteed Safe Checkout
            </p>
          
             <div className="flex-1 border-t border-[#949191]"></div>
          </div>
          
          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center gap-13">
          
            {productData.payments.slice(3, 10).map((icon, index) => (
              <div
                key={index}
                className="w-[68px] h-[42px] flex items-center justify-center border rounded-md px-3 py-1"
              >
                <Image
                  src={icon}
                  alt="payment"
                 width={icon.includes("paypal") ? 30 : 40}
                 height={icon.includes("paypal") ? 16 : 30}
                  className="object-contain cursor-pointer "
                />
              </div>
            ))}
          
          </div>
        </div>
         </div>

        {/* RIGHT */}
        <OrderSummary cart={cart} />
      </div>
    </div>
    </div>

     <div className="max-w-[1250px] mx-auto px-6 mt-26">
      <div className="flex justify-between mb-12">
        <h2 className="text-[#C1A58B] font-calluna text-[50px] leading-[58px] tracking-[0.02em] capitalize">
          {data.title}
        </h2>
        <button className="underline text-[20px] leading-[28px] cursor-pointer">
          {data.viewAllText}
        </button>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {data.products.map((item) => (
          <div key={item.id} className="group">
            
            {/* IMAGE */}
            <div className="relative h-[420px]">
              {item.tag && (
                 <span className="absolute top-0 left-0 bg-black text-white text-xs px-3 py-1 z-10">
                 {item.tag}
                </span>
                )}
              
              <Heart className="absolute top-1 right-4 text-white z-10" size={20} />

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-[50%_10%]"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-5">
              <h3 className="font-calluna text-[16px] leading-[24px] tracking-[0]">{item.name}</h3>

              <div className="flex items-center gap-2 text-sm mt-1">
                <span className="text-[#FFCE31] text-[18px]">★★★★★</span>
                <span className="text-gray-500">{item.rating}</span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-opensans text-[16px] leading-[24px] tracking-[0]">₹{item.price}</span>
                <span className="line-through font-opensans text-[14px] leading-[22px] text-[#686666]">₹{item.oldPrice}</span>
                <span className="bg-[#C1A58B] text-white text-[12px] leading-[20px] px-2 py-1 rounded-xl">
                  {item.discount}% off
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>

   {/* Instagram */}
   <div className="mt-18">
    <InstagramPage/>
    </div>
    </>
  );
}
