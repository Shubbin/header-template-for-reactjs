import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import SocialButton from "./SocialButton";


export default function Gallery() {
  const sections = [
    { name: "Portraits", link: "/portraits" },
    { name: "Events", link: "/events" },
    { name: "Weddings", link: "/weddings" },
  ];

  const [clickedSection, setClickedSection] = useState(null);

  const handleClick = (index) => {
    setClickedSection(index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center  ">

      {sections.map((section, index) => (
        <div key={index} className="mb-12 flex flex-col items-center w-[85%]">
          <div className="w-full flex items-center">
            <p className="text-4xl md:text-5xl font-medium uppercase pb-8 ml-4  flex-grow border-b border-white/50 ">
              {section.name}
            </p>
            <Link
              to={section.link}
              className="flex items-center m py-5" // Reduced margin to decrease space
              onClick={() => handleClick(index)}
            >
              <BsArrowRightCircleFill className="text-white text-5xl hover:text-gray-200 mr-5" />
            </Link>
          </div>

        </div>
      ))}
       {/* Footer */}
 <footer className=" text-white text-center py-1 fixed bottom-0 w-full flex items-center justify-between px-1 mb-20">
          <p className="font-[Poppins] text-small">
            &copy; 2024 Jimi Pixels Photography.
          </p>
          <SocialButton />
        </footer>
    </div>
  );
}
