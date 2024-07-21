import React from 'react'

export default function Weddings() {
  return (
    <div className="min-h-screen flex flex-col bg-black">

      {/* Cover Image */}
      <div className=" w-full h-[80vh] mt-21">
        {" "}
        {/* Added margin-top */}
        <img
          src={  }
          alt="Cover"
          className="w-full h-full object-cover  "
        />

      </div>

      {/* Image Grid */}
      <div className="flex-1 p-4 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {/* Replace these with your image URLs */}
          <img
            src="image1-url.jpg"
            alt="Weddings 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="image2-url.jpg"
            alt="Weddings 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="image3-url.jpg"
            alt="Weddings 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="image4-url.jpg"
            alt="Weddings 4"
            className="w-full h-auto object-cover"
          />
          <img
            src="image5-url.jpg"
            alt="Weddings 5"
            className="w-full h-auto object-cover"
          />
          <img
            src="image6-url.jpg"
            alt="Weddings 6"
            className="w-full h-auto object-cover"
          />
          <img
            src="image7-url.jpg"
            alt="Weddings 7"
            className="w-full h-auto object-cover"
          />
          <img
            src="image8-url.jpg"
            alt="Weddings 8"
            className="w-full h-auto object-cover"
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}


