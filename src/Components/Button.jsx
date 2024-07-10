import React from 'react'

export default function Button(props) {
  return (
   <button className='bg-indigo-500 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover'>
   {props.children}
   </button>
  )
}

