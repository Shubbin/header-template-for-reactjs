import React from "react";
import SocialButton from "../Components/SocialButton";
import Jimipixels from "../Images/jimi_logo.png";

export default function Footer() {
  return (
    <div className="bg-black text-white fixed bottom-0 w-full flex flex-col items-center p-4">
      <div className="w-full flex justify-between items-center mb-4">
        <img src={Jimipixels} link="/" alt="Jimi Pixels Logo" className="h-8 cursor-pointer" />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-4 font-small font-thin">
          <a href="/"   className="text-white hover:underline text-l">Home</a>
          <a href="gallery" className="text-white hover:underline text-l">Gallery</a>
          <a href="contact" className="text-white hover:underline text-l" >Contact</a>
          <a href="about" className="text-white hover:underline text-l">About</a>
        </div>
        <div>
          <SocialButton />
        </div>
      </div>
      <div className="w-full mt-4">
        <hr className="border-t border-white mb-2" />
        <p className="font-[Poppins] text-small text-center items-center">
            &copy; 2024 Jimi Pixels Photography.
          </p>
        <div className="text-center"></div>
      </div>
    </div>
  );
}
