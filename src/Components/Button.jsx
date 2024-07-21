import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <Link to={props.to}>
      <button className='w-195 h-73 px-2 py-2 rounded-[35px] border border-white text-white font-[Poppins] hover:bg-transparent hover:opacity-75 transition-opacity duration-300'>
        {props.children}
      </button>
    </Link>
  );
}
