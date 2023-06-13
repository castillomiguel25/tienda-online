import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const Carousels = ({ data }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  if (!data) {
    return null;
  }
  const { images, title } = data;

  if (!images || !title) {
    return null;
  }

  console.log(images);

  const slides = images.slice(0, 10).map((image) => ({
    url: image,
  }));

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastlide = currentIndex === slides.length - 1;
    const newIndex = isLastlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[full] h-[450px] mb-10 mx-0 w-full m-auto relative group z-0">
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-center bg-cover  duration-500"></div>
      <div>
        <button onClick={prevSlide} className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <AiOutlineArrowRight size={40} />
        </button>
      </div>
      <div>
        <button onClick={nextSlide} className="absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <AiOutlineArrowLeft size={40} />
        </button>
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
