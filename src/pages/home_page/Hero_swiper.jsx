import { Button } from '@nextui-org/button';
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";


const images = [
  "https://picsum.photos/800/500",
  "/assets/vision.png",
  "/assets/person.png",

];


export default function Hero_swiper() {


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full  h-[630px] ">
      {/* Image */}
      <div className=" w-full  h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute z-10 top-0 left-0 w-full h-full transition-transform duration-500 object-cover object-top ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>


      <div className=' relative z-20  bottom-12 flex flex-row justify-center items-center left-0'>

        {/* Previous Button */}
        <Button
          isIconOnly
          onClick={prevSlide}
          className=" bg-white group text-black p-3 rounded-xl hover:bg-primary"
        >
          <FaChevronDown className='text-[30px] group-hover:text-white group-hover:font-semibold rotate-90' />
        </Button>


        {/* Pagination */}
        <div className="flex flex-row items-center justify-center  px-16  space-x-2 ">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex
                ? "w-6 bg-primary"
                : "bg-white"
                }`}
            ></button>
          ))}
        </div>



        {/* Next Button */}
        <Button
          isIconOnly
          onClick={nextSlide}
          className=" bg-white group text-black p-3 rounded-xl hover:bg-primary"
        >
          <FaChevronDown className='text-[30px] group-hover:text-white group-hover:font-semibold -rotate-90' />
        </Button>
      </div>



    </div>
  );
};


