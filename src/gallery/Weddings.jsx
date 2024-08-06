import React from "react";
import Footer from "../Components/Footer";
import WeddingImage from "../Images/Jimi_wedding-bg.png";
import JimiImage1 from "../Images/Jimi_wedding1.png";
import JimiImage2 from "../Images/Jimi_wedding2.png";
import JimiImage3 from "../Images/Jimi_wedding3.png";
import JimiImage4 from "../Images/Jimi_wedding4.png";
import JimiImage5 from "../Images/Jimi_wedding5.png";
import JimiImage6 from "../Images/Jimi_wedding6.png";
import JimiImage7 from "../Images/Jimi_wedding7.png";
import JimiImage8 from "../Images/Jimi_wedding8.png";
import JimiImage9 from "../Images/Jimi_wedding9.png";
import JimiImage10 from "../Images/Jimi_wedding10.png";
import JimiImage11 from "../Images/Jimi_wedding11.png";
import JimiImage12 from "../Images/Jimi_wedding12.png";
import JimiImage13 from "../Images/Jimi_wedding13.png";

export default function Weddings() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Cover Image */}
      <div className="w-full h-[80vh] mt-21 mb-20">
        <img
          src={WeddingImage}
          alt="Cover"
          className="w-full h-full mt-20 md:mt-12 mb-20 "
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white -mt-36 ">
          <h1 className="text-4xl md:text-7xl font-bold uppercase -mt-20 ">
            Portraits
          </h1>
          <p className=" md:text-small  text-small font-thin mt-5 mb-20 ">
            Capturing special moments with beautiful portraits for you
          </p>
        </div>
        <p className="-mt-40 text-white uppercase text-center  items-center md:text-5xl text-3xl mb-10 ">
          Featured Portraits shots
        </p>
      </div>

      {/* Image Grid */}
      <div className="flex-1 p-4 mb-20 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-5">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage1}
              alt="Weddings 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage2}
              alt="Weddings 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage3}
              alt="Weddings 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage4}
              alt="Weddings 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage5}
              alt="Weddings 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage6}
              alt="Weddings 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage7}
              alt="Weddings 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage8}
              alt="Weddings 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage9}
              alt="Weddings 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage10}
              alt="Weddings 10"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage11}
              alt="Weddings 11"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage12}
              alt="Weddings 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={JimiImage13}
              alt="Weddings 13"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
