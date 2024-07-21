import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";


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
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">

      {sections.map((section, index) => (
        <div key={index} className="mb-12 flex flex-col items-center w-full">
          <div className="w-full flex items-center">
            <p className="text-5xl md:text-7xl font-medium uppercase pb-8 flex-grow border-b border-white/50">
              {section.name}
            </p>
            <Link
              to={section.link}
              className="flex items-center ml-2" // Reduced margin to decrease space
              onClick={() => handleClick(index)}
            >
              <BsArrowRightCircleFill className="text-white text-4xl" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
