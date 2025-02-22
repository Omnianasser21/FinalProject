


import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";


export default function CategariesSilder() {
  const [categaries, setcategaries] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1000,

  };

  function GetCat() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        console.log(res.data.data);
        setcategaries(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  useEffect(() => {
    GetCat();
  }, []);

  return (
   <>
   <h2 className="my-3 capitalize text-gray-600 ">Shop Popular categray</h2>
    <Slider {...settings}>
      {categaries.map((category) => (
        <div key={category._id}>
          <img src={category.image} className="w-full h-[200px] object-fill" alt={category.name} />
          <h4>{category.name}</h4>
        </div>
      ))}
    </Slider>
    </>
  );
}
