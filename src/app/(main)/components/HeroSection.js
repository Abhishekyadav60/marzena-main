
"use client";
import Image from "next/image";

export default function HeroSection({ 
  hero, 
  PrimaryButton, 
  customHeight, 
  contentPosition, 
  textAlign,
  imagePosition  
}) {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={hero.image}
        alt="banner"
        width={1920}
        height={650}
        className={`w-full object-cover ${imagePosition || "object-center" } ${customHeight || "h-[400px] md:h-[650px]"}`}
        priority
      />

      <div className={`absolute inset-0 flex ${contentPosition || "items-center justify-end px-6 md:px-24"}`}>
        <div className={`max-w-lg flex flex-col ${textAlign || "items-center text-center"}`}>
          <h1 className="font-['Baskervville'] text-3xl text-[44px] text-black mb-6 leading-tight">
            {hero.title}
          </h1>

          <p className="font-inter text-[16px] leading-[23px] text-[#535353] mb-8 max-w-sm">
            {hero.subtitle}
          </p>

          <PrimaryButton className="font-bold" variant="gold">
            {hero.button}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}