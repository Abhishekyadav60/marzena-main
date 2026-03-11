// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { productData } from "@/data/productData";
// import { Heart, Share2, Star, ShieldCheck } from "lucide-react";

// export default function ProductPage() {
//   const [selectedImage, setSelectedImage] = useState(productData.images[0]);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [qty, setQty] = useState(1);
//   const [wishlisted, setWishlisted] = useState(false);
//   const [pincode, setPincode] = useState("");
//   const [pinStatus, setPinStatus] = useState("");

//   const increaseQty = () => setQty(q => q + 1);
//   const decreaseQty = () => qty > 1 && setQty(q => q - 1);

//   const checkPincode = () => {
//     if (pincode.length !== 6) {
//       setPinStatus("❌ Enter valid 6 digit pincode");
//     } else {
//       setPinStatus("✅ Delivery available");
//     }
//   };

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     cart.push({ title: productData.title, size: selectedSize, qty });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Added to cart");
//   };

//   const buyNow = () => {
//     addToCart();
//     alert("Proceeding to checkout");
//   };

//   const discountPercent = Math.round(
//     ((productData.oldPrice - productData.price) / productData.oldPrice) * 100
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-10">

//         {/* LEFT IMAGES */}
//         <div className="flex gap-4">
//           <div className="flex flex-col gap-3">
//             {productData.images.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-24 border rounded overflow-hidden ${selectedImage === img ? "border-black" : "border-gray-200"}`}
//               >
//                 <Image src={img} alt="" width={80} height={96} className="object-cover w-full h-full"/>
//               </button>
//             ))}
//           </div>

//           <div className="relative w-full aspect-[3/4] border rounded overflow-hidden">
//             <Image src={selectedImage} alt="product" fill className="object-cover"/>
//           </div>
//         </div>

//         {/* RIGHT DETAILS */}
//         <div className="space-y-5">
//           <h1 className="text-2xl font-semibold">{productData.title}</h1>

//           <div className="flex items-center gap-3">
//             <span className="text-2xl font-bold">₹ {productData.price.toLocaleString()}</span>
//             <span className="line-through text-gray-400">₹ {productData.oldPrice.toLocaleString()}</span>
//             <span className="text-green-600">({discountPercent}% OFF)</span>
//           </div>

//           <div className="flex items-center gap-2 text-sm">
//             <Star size={16} fill="#f5a623" className="text-[#f5a623]" />
//             {productData.rating} ({productData.reviews} Reviews)
//           </div>

//           <p className="text-red-600 text-sm">Only {productData.stockLeft} left</p>

//           {/* SIZE */}
//           <div>
//             <p className="font-semibold mb-2">SELECT SIZE</p>
//             <div className="flex flex-wrap gap-2">
//               {productData.sizes.map(size => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded ${selectedSize===size ? "bg-black text-white" : ""}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* QUANTITY */}
//           <div>
//             <p className="font-semibold mb-2">Quantity</p>
//             <div className="flex border w-fit">
//               <button onClick={decreaseQty} className="px-3">-</button>
//               <span className="px-4">{qty}</span>
//               <button onClick={increaseQty} className="px-3">+</button>
//             </div>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex flex-col gap-3">
//             <button onClick={addToCart} className="bg-[#b08d57] text-white py-3 rounded">
//               Add to Cart
//             </button>
//             <button onClick={buyNow} className="border border-black py-3 rounded hover:bg-black hover:text-white">
//               Buy Now
//             </button>
//           </div>

//           {/* ICON BUTTONS */}
//           <div className="flex gap-3">
//             <button onClick={()=>setWishlisted(!wishlisted)} className="border p-3 rounded">
//               <Heart className={wishlisted ? "text-red-500 fill-red-500" : ""}/>
//             </button>
//             <button onClick={()=>navigator.share?.({title:productData.title})} className="border p-3 rounded">
//               <Share2/>
//             </button>
//           </div>

//           {/* PINCODE */}
//           <div className="border p-4 rounded space-y-2">
//             <p className="font-semibold">Check Delivery</p>
//             <div className="flex gap-2">
//               <input value={pincode} onChange={e=>setPincode(e.target.value)} className="border px-3 py-2 rounded w-full" placeholder="Enter Pincode"/>
//               <button onClick={checkPincode} className="bg-black text-white px-4 rounded">Check</button>
//             </div>
//             {pinStatus && <p className="text-sm">{pinStatus}</p>}
//           </div>

//           {/* SAFE CHECKOUT */}
//           <div className="flex items-center gap-2 bg-gray-100 p-3 rounded">
//             <ShieldCheck className="text-green-600"/> Guaranteed Safe Checkout
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <h3 className="font-semibold mb-2">Description</h3>
//             <p className="text-gray-600 whitespace-pre-line">{productData.description}</p>
//           </div>

//           <p className="text-gray-500 text-sm">Delivery Time : {productData.deliveryTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// }