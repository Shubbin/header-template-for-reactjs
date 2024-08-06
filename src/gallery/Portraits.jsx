import React from "react";
import Footer from "../Components/Footer";
import JimiHomeImage from "../Images/jimi_home.png";
import JimiPortrait1 from "../Images/Jimi_portrait1.png";
import JimiPortrait2 from "../Images/Jimi_portrait2.png";
import JimiPortrait3 from "../Images/Jimi_portrait3.png";
import JimiPortrait4 from "../Images/Jimi_portrait4.png";
import JimiPortrait5 from "../Images/Jimi_portrait5.png";
import JimiPortrait6 from "../Images/Jimi_portrait6.png";
import JimiPortrait7 from "../Images/Jimi_portrait7.png";
import JimiPortrait8 from "../Images/Jimi_portrait8.png";
import JimiPortrait9 from "../Images/Jimi_portrait9.png";
import JimiPortrait10 from "../Images/Jimi_portrait10.png";
import JimiPortrait11 from "../Images/Jimi_portrait11.png";
import JimiPortrait12 from "../Images/Jimi_portrait12.png";
import JimiPortrait13 from "../Images/Jimi_portrait13.png";
import JimiPortrait14 from "../Images/Jimi_portrait14.png";
import JimiPortrait15 from "../Images/Jimi_portrait15.png";

export default function Portraits() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Cover Image */}
      <div className="relative w-full h-[90vh] mt-21 mb-5">
        {/* Added margin-top */}
        <img src={JimiHomeImage} alt="Cover" className="w-full h-full mt-20 md:mt-20 mb-30 " />
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white -mt-36 ">
          <h1 className="text-4xl md:text-7xl font-bold uppercase -mt-25 ">
            Portraits
          </h1>
          <p className=" md:text-2xl  text-small font-thin mt-5 mb-20 ">
            Capturing special moments with beautiful portraits for you
          </p>
        </div>
        <p className="-mt-20 text-white uppercase text-center  items-center md:text-5xl text-3xl mb-10 ">Featured Portraits shots</p>
      </div>

      {/* Image Grid */}
      <div className="flex-1 p-4 mb-20 mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait1}
              alt="Portrait 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait2}
              alt="Portrait 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait3}
              alt="Portrait 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait4}
              alt="Portrait 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait5}
              alt="Portrait 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait6}
              alt="Portrait 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait7}
              alt="Portrait 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait8}
              alt="Portrait 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait9}
              alt="Portrait 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait10}
              alt="Portrait 10"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait11}
              alt="Portrait 11"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait12}
              alt="Portrait 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait13}
              alt="Portrait 13"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait14}
              alt="Portrait 14"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiPortrait15}
              alt="Portrait 15"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
