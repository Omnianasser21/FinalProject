import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Slider from "react-slick";


export default function ProductDetails() {
  const [showPRO, setshowPRO] = useState(null);
  const [relatedProduct, setrelatedProduct] = useState([])
  let { id, category } = useParams();


    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
  function GetProudcat(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res) => {
        console.log(res.data.data);
        setshowPRO(res.data.data);
      }).catch((res) => {
        console.log(res);
      });
  }
  function GetAllDetils(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res)=>{
      console.log(res.data.data); // all array
     let relate= res.data.data.filter((product) => product.category.name == category);
     console.log(relate);
     setrelatedProduct(relate)
     

      
    }).catch((res)=>{
      console.log(res);
      
    })
  }
  

  useEffect(() => {
    GetProudcat(id);
    GetAllDetils();
  }, [id, category]);
  return (
    <div className="flex flex-wrap py-5 px-5">
      <div className="w-1/4 ">
        <Slider {...settings}>
          {showPRO?.images.map((src) => (
            <img className="w-full" src={src} />
          ))}
        </Slider>
      </div>
      <div className="w-3/4 p-10">
        <h4>{showPRO?.title}</h4>

        <p className="text-slate-600 my-4">{showPRO?.description}</p>

        <h4 className="text-pink-300">{showPRO?.category.name}</h4>

        <h6 className="text-pink-600">{showPRO?.price} EGY</h6>

        <button
          onClick={() => addTOcart(product.id)}
          className="bg-pink-400 rounded-md w-[70%] m-4"
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>

      <div className="flex flex-wrap items-center h-screen p-5">
        {relatedProduct.length > 0 ? (
          relatedProduct.map((product) => (
            <div key={product.id} className="w-1/6">
              <div className="item">
                <Link
                  to={`/productDetails/${product.id}/${product.category.name}`}
                >
                  <img
                    className="w-full"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  <h3 className="text-pink-600">{product.category.name}</h3>
                  <p className="text-slate-600">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <div className="flex justify-between p-3 items-center">
                    <span>
                      <i className="fas fa-star text-yellow-300"></i>
                      {product.ratingsAverage}
                    </span>
                    <span className="mt-2 text-pink-500">
                      {product.price} EGP
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => addTOcart(product.id)}
                  className="bg-pink-400 rounded-md w-[70%] m-4"
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart{" "}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </div>
  );
}
