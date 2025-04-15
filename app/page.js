'use client';

import CategoryGrid from "@/components/frontpage/CategoryGrid";
import ExtraServices from "@/components/frontpage/ExtraServices";
import Gadgets from "@/components/frontpage/Gadgets";
import InquiryForm from "@/components/frontpage/InquiryForm";
import RecommendedItems from "@/components/frontpage/RecommendedItems";
import DealsSection from "@/components/frontpage/Sales";
import Image from "next/image";
import { assets } from "@/images/assets";
import { useRouter } from "next/navigation";


export default function MainSection() {
  const router = useRouter()

  return (
    <>
   <div className="bg-white md:flex py-4 md:px-10 lg:px-44">
      {/* Left Sidebar Categories (Hidden on smaller screens) */}
      <div className="hidden md:block w-1/5 p-4">
        <ul className="space-y-3 text-gray-700 font-medium">
          <li className="bg-blue-100 p-2 rounded-md font-semibold">Automobiles</li>
          <li className="hover:text-blue-600 cursor-pointer">Clothes and wear</li>
          <li className="hover:text-blue-600 cursor-pointer">Home interiors</li>
          <li className="hover:text-blue-600 cursor-pointer">Computer and tech</li>
          <li className="hover:text-blue-600 cursor-pointer">Tools, equipments</li>
          <li className="hover:text-blue-600 cursor-pointer">Sports and outdoor</li>
          <li className="hover:text-blue-600 cursor-pointer">Animal and pets</li>
          <li className="hover:text-blue-600 cursor-pointer">Machinery tools</li>
          <li className="hover:text-blue-600 cursor-pointer">More category</li>
        </ul>
      </div>

      {/* Center Main Banner */}
      <div className="md:w-3/5 p-4 flex items-center justify-center">
        <div className="relative bg-green-200 p-6 md:p-8 rounded-lg w-full md:w-200 md:h-85 text-left overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full object-cover">
            <Image
              src={assets.cover}
              alt="Electronic Items"
              fill // Makes the image container relative
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute top-4 left-4 md:my-20 md:mx-6 text-left">
            <h2 className="text-lg text-black font-semibold">Latest trending</h2>
            <h1 className="text-2xl text-black font-bold">Electronic items</h1>
            <button className="mt-2 md:mt-4 px-4 py-2 bg-white border rounded-md text-black font-medium text-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar Options (Hidden on smaller screens) */}
      <div className="hidden md:block w-1/5 text-black p-4 space-y-3">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium">Hi, user</p>
          <p className="text-sm ">let’s get stated</p>
          <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded-md text-sm">Join now</button>
          <button
            onClick={() => {
              router.push('/login');
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer mt-2 w-full text-blue-800 hover:bg-blue-300 border p-2 rounded-md text-sm"
          >
            Log in
          </button>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded-lg text-sm font-medium">
          Get US $10 off with a new supplier
        </div>
        <div className="bg-blue-300 text-white p-4 rounded-lg text-sm font-medium">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>

    <DealsSection/>
    <CategoryGrid/>
    <Gadgets/>
    <InquiryForm/>
    <RecommendedItems/>
    <ExtraServices/>
    </>
  );
}
