import React, { useState, useEffect } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import data from "./data.js";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.jpeg";
import img7 from "./assets/img7.jpeg";

function App() {
  const [focusElement, setFocusElement] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  const images = [img1,img2,img3,img4,img5,img6,img7];

  const info = data.map(item => Object.values(item)[1]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 720); // Adjust the threshold as needed
    }

    window.addEventListener('resize', handleResize);

    // Initial call to handleResize
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="flex justify-around items-center bg-red-700 min-h-[100vh] flex-wrap pt-10">
     <div>
      {isMobile ? (
        <FancyCarousel
        images={images}
        setFocusElement={setFocusElement}
        carouselRadius={140}
        peripheralImageRadius={30}
        centralImageRadius={60}
        focusElementStyling={{ border: '2px solid #ba4949' }}
        autoRotateTime={2}
        borderWidth={4}
        borderHexColor={'1c364f'}
      />
      ) : (
        <FancyCarousel
          images={images}
          setFocusElement={setFocusElement}
          carouselRadius={250}
          peripheralImageRadius={60}
          centralImageRadius={100}
          focusElementStyling={{ border: '2px solid #ba4949' }}
          autoRotateTime={2}
          borderWidth={4}
          borderHexColor={'1c364f'}
        />
      )}
    </div>
      <div className="bg-black text-white p-3 shadow-sm  w-2/3 lg:w-1/3 max-md:w-[95%] ">
        <p>{info[focusElement]}</p>
      </div>
    </div>
  );
}

export default App;
