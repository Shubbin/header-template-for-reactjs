import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import JimiHomeImage from '../Images/jimi_home.png';
import JimiHomeImage2 from '../Images/jimi_home2.png';
import { FaArrowUpRight } from 'react-icons/fa';
import SocialButton from './SocialButton';


// Add more images as needed
const images = [JimiHomeImage, JimiHomeImage2,];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isResetting) {
      intervalId = setTimeout(() => {
        setCurrentImageIndex(0);
        setIsResetting(false);
      }, 100); // Quick transition time (0.1 seconds)
    } else {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            setIsResetting(true);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(intervalId);
    };
  }, [isResetting]);

  const sectionStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px 20px',
    textAlign: 'center',
    color: 'white',
    transition: isResetting ? 'none' : 'background-image 1s ease-in-out', // Smooth transition effect
  };

  return (
    <div style={sectionStyle}>
      <div className="text-center">
        <p className="mt-0 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-medium mb-5">
          JIMI PIXELS PHOTOGRAPHY
        </p>
        <p className="text-lg md:text-2xl lg:text-3xl font-light">
          I believe every photo tells a story, and I strive to make
          <br />
          each one special and unique.
        </p>
        <ul className="mt-8">
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Button to="/contact">Book A Session</Button>
          </li>
        </ul>
      </div>
       {/* Footer */}
       <footer className=" text-white text-center py-1 fixed bottom-0 w-full flex items-center justify-between px-1">
          <p className="font-[Poppins] text-small">
            &copy; 2024 Jimi Pixels Photography.
          </p>
          <SocialButton />
        </footer>
    </div>
  );
};

export default Homepage;
