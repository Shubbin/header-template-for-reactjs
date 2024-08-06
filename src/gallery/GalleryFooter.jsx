import React from "react";
import SocialButton from "../Components/SocialButton"; // Make sure this path is correct
import Jimipixels from "../Images/jimi_logo.png"; // Ensure this path is correct

export default function Footer() {
  return (
    <div className="bg-black text-white fixed bottom-0 w-full flex flex-col items-center p-4">
      <div className="w-full flex justify-between items-center mb-4">
        <img src={Jimipixels} alt="Jimi Pixels Logo" className="h-8" />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#home" className="text-white no-underline">
            Home
          </a>
          <a href="#gallery" className="text-white no-underline">
            Gallery
          </a>
          <a href="#contact" className="text-white no-underline">
            Contact
          </a>
          <a href="#about" className="text-white no-underline">
            About
          </a>
        </div>
        <div>
          <SocialButton />
        </div>
      </div>
      <div className="w-full mt-4">
        <hr className="border-none border-white mb-2" />
        <div className="text-center">&copy; 2024 Jimi Pixels Photography</div>
      </div>
    </div>
  );
}
