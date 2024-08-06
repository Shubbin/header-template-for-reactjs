import React from 'react';
import Footer from "../Components/Footer"

import EventImage from "../Images/Jimi_event-bg.png";
import JimiEvent1 from "../Images/Jimi_event1.png";
import JimiEvent2 from "../Images/Jimi_event2.png";
import JimiEvent3 from "../Images/Jimi_event3.png";
import JimiEvent4 from "../Images/Jimi_event4.png";
import JimiEvent5 from "../Images/Jimi_event5.png";
import JimiEvent6 from "../Images/Jimi_event6.png";
import JimiEvent7 from "../Images/Jimi_event7.png";
import JimiEvent8 from "../Images/Jimi_event8.png";
import JimiEvent10 from "../Images/Jimi_event10.png";
import JimiEvent11 from "../Images/Jimi_event11.png";
import JimiEvent12 from "../Images/Jimi_event12.png";
import JimiEvent13 from "../Images/Jimi_event13.png";
import JimiEvent14 from "../Images/Jimi_event14.png";
import JimiEvent15 from "../Images/Jimi_event15.png";
import JimiEvent16 from "../Images/Jimi_event16.png";
import JimiEvent17 from "../Images/Jimi_event17.png";
import JimiEvent18 from "../Images/Jimi_event18.png";
import JimiEvent19 from "../Images/Jimi_event19.png";
import JimiEvent20 from "../Images/Jimi_event20.png";
import JimiEvent21 from "../Images/Jimi_event21.png";
import JimiEvent22 from "../Images/Jimi_event22.png";

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-black">

      {/* Cover Image */}
      <div className=" w-full h-[80vh] mt-21 mb-2">
        {" "}
        {/* Added margin-top */}
        <img
          src={EventImage}
          alt="Cover"
          className="w-full h-full mt-20 md:mt-12 mb-20 "
        />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white -mt-36 ">
          <h1 className="text-4xl md:text-7xl font-bold uppercase -mt-25 ">
            Portraits
          </h1>
          <p className=" md:text-2xl  text-small font-thin mt-5 mb-20 ">
            Capturing special moments with beautiful portraits for you
          </p>
        </div>
        <p className="-mt-40 text-white uppercase text-center  items-center md:text-5xl text-3xl mb-20 ">Featured Portraits shots</p>
      </div>

      {/* Image Grid */}
      <div className="flex-1 p-4 mb-20 mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-10">
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent1}
              alt="Events 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent2}
              alt="Events 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent3}
              alt="Events 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent4}
              alt="Events 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent5}
              alt="Events 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent6}
              alt="Events 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent7}
              alt="Events 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent8}
              alt="Events 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              alt="Events 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent10}
              alt="Events 10"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent11}
              alt="Events 11"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent12}
              alt="Events 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent13}
              alt="Events 13"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent14}
              alt="Events 14"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent15}
              alt="Events 15"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent16}
              alt="Events 16"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent17}
              alt="Events 17"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent18}
              alt="Events 18"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent19}
              alt="Events 19"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent20}
              alt="Events 20"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent21}
              alt="Events 21"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={JimiEvent22}
              alt="Events 22"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
