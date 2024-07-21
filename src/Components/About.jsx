import React from 'react';
import about1 from '../Images/AbouMe1.png';
import about2 from '../Images/AboutMe2.png';

const About = () => {
  return (
    <div className='bg-black'>
      {/* Fixed "ABOUT ME" text */}
      <p className='text-white text-5xl md:text-8xl absolute top-1/4 left-1/2 transform -translate-x-1/2 '>ABOUT ME</p>

      {/* First div: Above second div on all screen sizes */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10 py-8">
        <img src={about1} alt="Image1" className="w-85 md:max-w-606 h-90 md:h-661 mt-10" />

        <div className="md:w-1/2 md:ml-4 text-center md:text-left">
          <p className="mt-10 text-base md:text-lg text-white">
            Hi, I'm Jimi Pixels. I've been a photographer since 2021, <br />
            so far I’ve been capturing special moments for about <br /> three years now. <br />
            My passion lies in taking portraits, covering events, <br /> and shooting weddings. <br />
            I find great joy in freezing time through my lens, <br />ensuring every moment is remembered.
          </p>
        </div>
      </div>

      {/* Second div: Below first div on all screen sizes */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-10 py-8">
        <div className="md:w-1/2 md:ml-4 text-center md:text-left">
          <p className="text-base md:text-lg text-white hidden md:block">
            Photography isn't just my job—it's my passion. My goal is to bring out your true personality
            through my images. I believe every photo tells a story, and I strive to make each one unique.
            Whether it's a candid moment at an event or a heartfelt smile at a wedding, I'm here to ensure
            those memories are preserved beautifully.

            I am dedicated to providing you with images that allow you to relive those emotions every time
            you look at them. Book a session with me and let me help you capture the beauty of your moments
            in the most genuine way possible.
          </p>
        </div>
        <div>
          <img src={about2} alt="Image2" className="w-661 md:max-w-606 h-600 md:h-661" />
        </div>
      </div>

      {/* Display on mobile screens */}
      <div className="md:hidden text-center mt-4">
        <p className="text-base mb-8 md:text-lg  text-white">
          Photography isn't just my job—it's my passion. My goal is to bring out your true personality
          through my images. I believe every photo tells a story, and I strive to make each one unique.
          Whether it's a candid moment at an event or a heartfelt smile at a wedding, I'm here to ensure
          those memories are preserved beautifully.

          I am dedicated to providing you with images that allow you to relive those emotions every time
          you look at them. Book a session with me and let me help you capture the beauty of your moments
          in the most genuine way possible.
        </p>
      </div>
    </div>
  );
}

export default About;
