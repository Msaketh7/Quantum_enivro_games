import React, { useState, useEffect, useRef } from "react";

export const Play = () => {
  // Image slideshow state
  const images = [
    "/img/play/play1.jpg",
    "/img/play/play2.jpg",
    "/img/play/play3.jpg",
    "/img/play/play4.jpg",
    "/img/play/play5.jpg",
    "/img/play/play6.jpg",
    "/img/play/play7.jpg",
    "/img/play/play8.jpg",
    "/img/play/play9.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const autoSlideInterval = useRef(null);

  // Auto-slide interval setup
  useEffect(() => {
    startAutoSlide();

    // Clear the interval on component unmount
    return () => stopAutoSlide();
  }, [images.length]);

  // Start auto-slide
  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
  };

  // Stop auto-slide
  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  // Reset auto-slide when navigating manually
  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Next Image with reset interval
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    resetAutoSlide();
  };

  // Previous Image with reset interval
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
    resetAutoSlide();
  };

  return (
    <div id="play" className="text-center">
      <div className="container">
        <div className="section-title">
          <a
            href="/path/to/your/play-file.zip"
            download
            className="download-button"
          >
          PLAY
          </a>
          <p>
            Quantum Enviro Games is hard at work on new and exciting game
            projects.</p>
            <p>Check back soon to see what we're developing next!</p>
        </div>
        <h3 style={{ color: 'white' }}>ESCAPE DRAGON</h3>

        <div className="slideshow">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="slide-image"
          />
          <div className="caption">
            {currentImage + 1} of {images.length}
          </div>
          <button className="prev-button" onClick={prevImage}>
            &#10094;
          </button>
          <button className="next-button" onClick={nextImage}>
             &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};