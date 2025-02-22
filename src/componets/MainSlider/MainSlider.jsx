import React from 'react'
import Slider from "react-slick"
import img2 from "../../assets/camera.jpeg";
import img4 from "../../assets/nono.jpeg";
import img3 from "../../assets/nini.png";
import img6 from "../../assets/cart.png";
import img7 from "../../assets/acc.jpg";

export default function MainSlider() {


      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <>
      <div className="flex my-10 ">
        <div className="w-3/4">
          <Slider {...settings}>
            <img src={img4} className="w-full h-[400px] object-fit"></img>
            <img src={img2} className="w-full h-[400px] object-contain"></img>
            <img src={img3} className="w-full h-[400px] object-fit"></img>
          </Slider>
        </div>
        <div className="w-1/4">
          <img src={img3} className="w-full h-[200px]"></img>
          <img src={img7} className="w-full h-[200px]"></img>
        </div>
      </div>
    </>
  );
}
