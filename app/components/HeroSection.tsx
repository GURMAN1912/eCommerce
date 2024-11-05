"use client";
import Image from 'next/image'
import React from 'react'
import hero from "../assests/hero.jpeg"
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row md:justify-center md:h-[80vh] items-center  py-8">
      
      {/* Top Image Section */}
      <div className="w-96 mb-8">
        <Image 
          src={hero} 
          alt="Hero Image" 
          layout="responsive" 
          objectFit="cover" 
          className="rounded-[28px] shadow-lg"
          priority={true}
        />
      </div>

      {/* Text Section Below Image */}
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Your One-Stop Shop for All Your Needs
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
        </p>
        <button
        onClick={()=>router.push('/shop')}
        className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-primary-dark transition mt-4">
          Shop Now
        </button>
      </div>

    </section>
  )
}

export default HeroSection
