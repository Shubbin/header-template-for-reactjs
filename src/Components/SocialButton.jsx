import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialButton() {
  return (
    <div className='flex space-x-4 text-x'>
      <a href="https://facebook.com" className='text-white'><FaFacebook /></a>
      <a href="https://instagram.com" className='text-white'><FaInstagram /></a>
      <a href="https://linkedin.com" className='text-white'><FaLinkedinIn /></a>
    </div>
  );
}
