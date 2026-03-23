"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { productData, homeData} from "@/data/products";
import { Heart, Share2, Star, Plus, Minus, Check, Truck } from "lucide-react";
import PrimaryButton from "@/app/(main)/components/PrimaryButton"
import InstagramPage from "@/app/(main)/components/InstagramPage";
import ReviewsSection from "@/app/(main)/components/review/ReviewsSection";



export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pinStatus, setPinStatus] = useState("");
  const [open,setOpen] = useState(null);
  const [phone, setPhone] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [reviews, setReviews] = useState(productData.reviewsList || []); 
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  const { title, countryCode, placeholder, buttonText, checkboxText } = productData.discountData;

const totalStock = productData.sizes.reduce(
  (acc, size) => acc + size.stock,
  0
);

const maxStock = productData.sizes.reduce(
  (acc, size) => acc + size.total,
  0
);
const progressPercent = (totalStock / maxStock) * 100;


  const handleChange = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setPhone(value);
   }

    const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const increaseQty = () => setQty(q => q + 1);
  const decreaseQty = () => qty > 1 && setQty(q => q - 1);

  const totalReviews = reviews.length;
  const avgRating =
  totalReviews === 0
    ? 0
    : reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

  const checkPincode = () => {
    if (pincode.length !== 6) {
      setPinStatus("Enter valid 6 digit pincode");
    } else {
      setPinStatus("Delivery available");
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ title: productData.title, size: selectedSize, qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  const buyNow = () => {
    alert("Proceeding to checkout");
  };
  
  // DeliveryInfo
  function getRemainingTime() {
    const now = new Date();
    const cutoff = new Date();

    cutoff.setHours(now.getHours() + (productData.deliveryData?.cutoffHours));

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const discountPercent = Math.round(
    ((productData.oldPrice - productData.price) / productData.oldPrice) * 100
  );

  const { products, discount } = productData.frequentlyBoughtData;

  const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
  const finalPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-8xl mx-auto bg-white p-6  grid md:grid-cols-2">

        {/* LEFT IMAGES */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-6">
            {productData.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-24 border rounded-md overflow-hidden ${selectedImage === img ? "border-black" : "border-gray-200"}`}
              >
                <Image src={img} alt="" width={80} height={96} className="object-cover w-full h-full"/>
              </button>
            ))}
          </div>

          <div className="relative w-[550px] aspect-[3/4] h-[600px] border rounded-xl overflow-hidden">
            <Image src={selectedImage} alt="product" fill className="object-cover"/>
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="space-y-5">
          <h1 className="font-inter font-medium w-[569px] text-[24px] leading-[38px] tracking-normal capitalize text-[#292929]">{productData.title}</h1>

          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">₹ {productData.price.toLocaleString()}</span>
            <span className="font-inter font-normal text-[24px] leading-[32px] tracking-normal align-middle line-through text-gray-400">₹ {productData.oldPrice.toLocaleString()}</span>
            <span className="text-[#00560A] font-inter font-semibold text-[20px] leading-[32px] tracking-normal align-middle">({discountPercent}% OFF)</span>
          </div>
           
          <div className="text-xs mb-3 capitalize">
            <p>{productData.taxe}</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
        <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
           <Star
           key={star}
           size={16}
           className={
           star <= Math.round(productData.rating)
            ? "fill-[#FFCF47] text-[#FFCF47]"
            : "text-[#FFCF47]"
        }
      />
    ))}
  </div>

    <span className="font-normal text-[15px] leading-[22px] tracking-[-0.01em] capitalize underline">
       {productData.rating} ({productData.reviews} Reviews)
    </span>
   </div>

        <p className="text-red-600 text-md font-bold">Only {productData.stockLeft} left!</p>

          <div>
         <p className="mb-2 text-[#292929] font-bold text-[15px] leading-[24px] tracking-normal">
          SELECT SIZE
         </p>

       <div className="flex flex-wrap gap-3">
  {productData.sizes.map((size) => (
    <div key={size.label} className="relative">

      {/* Size Button */}
      <button
        onClick={() => setSelectedSize(size)}
        className={`px-4 py-2 border font-medium text-[20px] rounded-md cursor-pointer transition
          ${selectedSize?.label === size.label
            ? "border-black text-black bg-white"
            : "border-gray-400 text-gray-500 hover:border-black hover:text-black"
          }
        `}
      >
        {size.label}
      </button>
      {selectedSize?.label === size.label && size.stock > 0 && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 
          px-2 py-[2px] text-[10px] text-white bg-[#D64040] rounded-full shadow-sm whitespace-nowrap">
          Only {size.stock} left
        </span>
      )}

    </div>
  ))}
</div>

  <div className="pt-5">
  <button className="px-3 py-1 text-[20px] font-medium text-[#837E7E] border border-[#837E7E] rounded-md hover:border-black hover:text-black transition">
    Custom
  </button>
</div>
</div>


<div className="mt-3 w-full">
  
  <p className="text-[13px] text-[#202020] font-medium mb-1">
    Hurry! Only {totalStock} items left in stock
  </p>

  <div className="w-[320px] h-2 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-2 bg-[#C1A58B] rounded-full transition-all duration-500"
      style={{
        width: `${progressPercent}%`,
      }}
    />
  </div>

</div>
  

  <div className="flex flex-col gap-4 text-[13px] text-[#292929] mt-4">
 <div className="flex flex-col gap-2 mt-2 text-[13px] text-[#292929]">
    {productData.info.map((item) => {

      return (
        <div key={item.id} className="flex items-center gap-2">
           <Check size={20} className="text-[#0EA514]" />
          <span className="font-inter font-normal text-[17px] leading-[24px] tracking-normal">{item.text}</span>
        </div>
      );
    })}
  </div>
</div>
        
  <div>
  <p className="mb-2 font-inter font-medium text-[16px] leading-[24px]">
    Quantity :
  </p>
  <div className="flex items-center border border-[#C1A58B] rounded-md overflow-hidden w-fit h-10">
    <button
      onClick={decreaseQty}
      className="px-4 h-full text-lg text-[#292929] hover:bg-gray-100 transition"
    >
      −
    </button>
    <span className="px-5 h-full flex items-center justify-center text-[14px] font-medium">
      {qty}
    </span>
    <button
      onClick={increaseQty}
      className="px-4 h-full text-lg text-[#292929] hover:bg-gray-100 transition"
    >
      +
    </button>
  </div>
</div>

         <div className="flex flex-col gap-3">
     <div className="flex items-center gap-3">
    <button
      onClick={addToCart}
      className="bg-[#C1A58B] text-white py-3 w-[450px] rounded-md cursor-pointer"
    >
      Add to Cart
    </button>

    <div className="flex gap-3">
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="p-3 rounded-md border border-[#EF9491] cursor-pointer"
      >
        <Heart className={wishlisted ? "text-red-500 fill-red-500" : ""} />
      </button>

      <button
        onClick={() => navigator.share?.({ title: productData.title })}
        className="p-3 rounded-mdcursor-pointer"
      >
        <Share2 />
      </button>
    </div>
  </div>
  <button
    className="border border-[#C1A58B] w-[550px]  py-3 rounded-md cursor-pointer"
  >
    Inquire About Customization
  </button>


<div className="flex flex-col gap-2">
  
  <p className="text-sm text-[#202020]">
    More payment options
  </p>

  <button
    onClick={buyNow}
    className="w-[550px] border border-[#D6A97A] cursor-pointer rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1 bg-white"
  >
    
    {/* Top Row */}
    <div className="flex items-center gap-2 text-[18px] font-medium text-[#202020]">
      <span>Buy now with</span>

      <div className="flex items-center -space-x-1">
        {productData.payments.slice(0, 3).map((icon, index) => (
          <div
            key={index}
            className="w-[19px] h-[19px] rounded-full overflow-hidden border border-black bg-white flex items-center justify-center"
          >
            <img
              src={icon}
              alt="payment"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Row */}
    <div className="flex items-center gap-1 text-[12px] text-[#202020]">
      <span>Powered By</span>
      <img
        src="/icons/shiprocket.png"
        alt="shiprocket"
        className="w-[14px] h-[14px]"
      />
      <span className="text-[#202020] font-medium">Shiprocket</span>
    </div>

  </button>
</div>

</div>

 <div className="space-y-4">

      {/* Delivery Line */}
      <div className="flex items-center gap-2 text-[#202020] font-normal text-[14px] leading-[22px]">
        <Truck size={18} />
        <p>
          Order in the next{" "}
          <span className="font-bold">
            {timeLeft.hours} hours {timeLeft.minutes} minutes
          </span>{" "}
          to get it by{" "}
          <span className="font-bold uppercase">
            {getDeliveryDate()}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-3 text-gray-700 font-medium text-[16px] leading-[24px]">
        {productData.deliveryData?.features?.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Check size={19} className="text-[#16483C]" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </div>
          {/* PINCODE */}
            <div className="flex gap-2">
              <input value={pincode} onChange={e=>setPincode(e.target.value)} className="border border-[#C1A58B] px-3 py-2 rounded-md h-[50px] w-[420px]" placeholder="Enter Pincode & check"/>
              <button onClick={checkPincode} className="bg-[#C1A58B] text-white px-6 rounded-md cursor-pointer">Apply Now</button>
            </div>
            {pinStatus && <p className="text-sm">{pinStatus}</p>}

        {/* Description */}
      <div className="pt-4">
        <h2 className="text-lg font-semibold border-b-2 border-black inline-block">
          { productData.descriptionData.title}
        </h2>

      {/* Content */}
        <div className="mt-4 w-[588px] space-y-4 text-[#202020] text-[17px] leading-6">
          <p className="whitespace-pre-line">
            {productData.descriptionData.content}
          </p>

          {/* Details */}
          <div className="space-y-6 font-medium text-gray-700 leading-6 align-middle">
            {productData.descriptionData.details.map((item, index) => (
              <p key={index}>
                <span>{item.label} :</span>{" "}
                {item.value}
              </p>
            ))}
          </div>

        </div>
    </div>

     {/* ACCORDION */}
 <div className="max-w-xl">
      <div className="border-t border-[#949191]">
        {productData.accordionData.map((item, i) => (
          <div key={i} className="border-b border-[#949191]">

            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-bold text-[16px] leading-[24px] align-middle">
                {item.title}
              </span>

              <Plus
                size={20}
                className={`transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              />
            </button>

            {open === i && (
              <p className="pb-4 font-bold text-[16px] leading-[24px] align-middle">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>

      

    </div>
    {/* Safe Checkout */}
      <div className=" w-xl mt-8">

        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="flex-1 border-t border-[#949191]"></div>

          <p className="text-[18px] font-normal leading-6 text-gray-700">
            Guaranteed Safe Checkout
          </p>

          <div className="flex-1 border-t border-[#949191]"></div>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap justify-center gap-4">

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
        
      </div>
    </div>

{/* Frequently */}
 <div className="bg-[#FAEEE3] py-20 px-6">
      <div className="max-w-[1350px] mx-auto">

        <h2 className="text-[40px] font-semibold text-[#220022] mb-12">
          Frequently Bought Together
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-3 flex-1">

            {products.map((product, index) => (
              <div key={product.id} className="flex items-center gap-3">

                {/* CARD */}
                <div className="p-4 rounded-lg border border-[#C1A58B] w-[340px]">

                  <div className="relative w-full h-[260px] rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-[60%_10%] "
                    />
                  </div>

                  <h3 className="text-sm mt-4">{product.name}</h3>

                  <div className="flex gap-2 mt-2 text-sm">
                    <span className="font-bold text-sm leading-[22px]">
                      ₹{product.price.toLocaleString()}
                    </span>

                    <span className="line-through text-sm font-normal leading-[22px] line-through">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  </div>

                </div>

              {index < products.length - 1 && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-[#D6C4B2] bg-white text-3xl leading-none text-gray-700">
                <Plus size={20} strokeWidth={2} className="text-black" />
              </div>
            )}

              </div>
            ))}

          </div>

          {/* PRICE BOX */}
          <div className="w-[160px]">

            <p className="font-semibold text-base text-[#202020] text-[16px] mb-2">Price Total:</p>

            <div className="flex items-center gap-3 mb-5">

              <span className="line-through text-[16px] text-gray-500">
                ₹{totalPrice.toLocaleString()}
              </span>

              <span className="text-xl text-[16px] font-semibold">
                ₹{finalPrice.toLocaleString()}
              </span>

            </div>
            <PrimaryButton variant="goldSoft" className="text-xs rounded-md">
              Add to Cart
            </PrimaryButton>

            <p className="font-normal text-[16px] leading-[24px] tracking-[0px] mt-4 text-center">
              Get a {discount}% discount buying these products together
            </p>

          </div>

        </div>
      </div>
    </div>

{/* Discover */}
   <div className="w-full bg-white py-10 overflow-hidden">
  <div className="max-w-[1400px] mx-auto flex flex-col gap-5">

    {productData.discover.map((cat) => (
      <div
        key={cat.id}
        className={`flex flex-col md:flex-row ${
          cat.reverse ? "md:flex-row-reverse" : ""
        } items-stretch w-full`}
      >
        {/* Image Box */}
        <div className="w-full md:w-1/2">
          <Image
            src={cat.image}
            alt={cat.title}
            width={673}
            height={538}
            className="w-full h-[538px] rounded-lg object-cover object-[50%_30%]"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10 md:p-24 text-center relative bg-white">

          <div className="relative z-10 max-w-md">
            <h2 className="font-normal text-[25px] leading-[40px] tracking-normal text-center mb-4">
              {cat.title}
            </h2>

            <p className="font-medium text-[16px] leading-[24px] text-gray-600 tracking-normal text-center">
              {cat.desc}
            </p>

            <PrimaryButton variant="goldSoft" className="mt-6">
              Shop Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

{/* Also like */}

 <div className="w-full bg-[#FAEEE3] py-16">
      <div className="max-w-[1450px] mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          You May Also Like
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.recommendations?.map((item) => (
            <div key={item.id} className="group">
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                  className="w-full h-[320px] object-cover object-[50%_5%] rounded-xl"
                />

                {/* New Badge */}
                {item.isNew && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="mt-7">
                <h3 className="text-sm md:text-base text-[#1E1E1E]">
                  {item.name}
                </h3>
                <p className="text-sm font-medium mt-2 text-[#000000]">
                  {item.price}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Review section */}
   <div>
      <ReviewsSection />
    </div>

{/* Discount */}
    <div className="bg-[#FAEEE3] py-16 px-6">
      <div className="max-w-[1300px] mx-auto text-center">

        {/* Heading */}
        <h2 className="font-inter font-normal text-[40px] leading-[40px] tracking-normal text-center uppercase">
          {title}
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row items-center gap-4">

          {/* Input Wrapper */}
          <div className="flex items-center border border-[#202020CC] rounded-md px-4 py-3 mt-9 w-full">

            <span className="mr-3 text-gray-700 border-r pr-3">
              {countryCode}
            </span>

            <input
              type="text"
               value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPhone(value);
                }}
                maxLength={10}    
                inputMode="numeric"          
              placeholder={placeholder}
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500 font-medium text-[16px] leading-[100%]"
            />
          </div>

          {/* Button */}
         <PrimaryButton className="mt-3 lg:mt-9" variant="goldSoft" onClick={() => toast.success("Discount Unlocked")}>
          {buttonText}
         </PrimaryButton>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-800">
          <input type="checkbox"
          defaultChecked
           className="accent-black" />
          <p>{checkboxText}</p>
        </div>

      </div>
    </div>


     <div className="bg-[#f3f3f3] py-16 px-4 md:px-10">
      <div className="max-w-[1250px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] text-center text-[#202020] mb-10 font-inter font-normal text-[40px] leading-[48px] tracking-normal capitalize">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {productData.faqData.map((item, index) => (
            <div key={item.id}>
              
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-[#202020] text-lg"
              >
                {item.question}
                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-md leading-6">
                  {item.answer}
                </p>
              )}
              {/* Line */}
              <div className="border-b border-[#949191] mt-3"></div>
              
            </div>
          ))}
        </div>
      </div>
    </div>


{/* Related Product */}
      <div className="bg-[#efe6dc] py-12 px-4 md:px-10">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-inter font-medium text-[40px] leading-[48px] capitalize text-gray-800">
            Related Products
          </h2>
          <button className="text-xl underline cursor-pointer">View All</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.relatedProducts.map((item) => (
            <div key={item.id} className="group">
              
              {/* Image Card */}
              <div className="relative rounded-xl overflow-hidden">
                
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover object-[50%_5%]"
                />

                {/* Bestseller Tag */}
                {item.bestseller && (
                  <span className="absolute top-0 left-0 rounded-tl-md bg-[#232323] text-white text-xs px-3 py-1">
                    Bestseller
                  </span>
                )}

                {/* Wishlist Icon */}
                <button className="absolute top-1 right-2 rounded-full p-1 cursor-pointer">
                  <Heart size={20} className="text-white"/>
                </button>
              </div>

              {/* Content */}
              <div className="mt-5 space-y-1">
                
                {/* Title */}
                <h3 className="text-[16px] leading-[24px] font-inter">
                  {item.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-300"
                    />
                  ))}
                  <span className="ml-1 text-gray-600">
                    {item.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-inter font-normal text-[16px] leading-[24px] tracking-normal">
                    ₹ {item.price.toLocaleString()}
                  </span>
                  <span className="line-through text-[#686666] font-openSans font-normal text-[14px] leading-[22px] tracking-normal line-through">
                    ₹ {item.oldPrice.toLocaleString()}
                  </span>
                  <span className="bg-[#C1A58B] text-white text-xs px-2 py-1 rounded">
                    {item.discount}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
   <div className="py-17 px-6 md:px-12">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {homeData.features.map((f) => (
              <div key={f.id} className="space-y-3">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={60}
                  height={60}
                  className="w-16 h-16 mx-auto"
                />
                <h1 className="font-inter font-bold text-[22px] leading-[28px] tracking-normal text-center">{f.title}</h1>
                <p className="text-gray-700 font-inter mt-7 font-normal text-[18px] leading-[24px] tracking-normal text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Instagram */}
       <InstagramPage/>

    </>
  );
}


