import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
 import{ useContext } from "react";
 import { CartContext } from './../CartContext';
 import toast from "react-hot-toast";
import { WishListConxt } from "../WishListContext";


export default function RecentProduct() {

  let { AddProuductTOcart, numItem, setnumItem, addTowish } =
    useContext(CartContext);
  let { addtoWishlist } = useContext(WishListConxt);
  const [Loading, setLoading] = useState(false)
  const [currentid, setcurrentid] = useState(0)

async function addTOcart(id) {
  setcurrentid(id);
  setLoading(true);

  try {
    const response = await AddProuductTOcart(id);
    console.log("الاستجابة الكاملة:", response);

    if (response && response.data && response.data.status === "success") {
      setnumItem(numItem+1)
      toast.success(response.data.message);
    } else {
      toast.error(response?.data?.message || "الاستجابة غير متوقعة");
    }
  } catch (error) {
    console.error("خطأ أثناء إضافة المنتج:", error);
    toast.error(`فشل: ${error.message}`);
  } finally {
    setLoading(false);
  }
}

 async function addWish(id){
 let res= await addtoWishlist(id)
 console.log(res.data.status);
 if(res.data.status == 'success'){
  toast.success(res.data.message)

 }else{
  toast.error(res.data.message)
 }

 
}


  function getProducts(){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

 let {data,isError,isLoading,isFetching}= useQuery({
    queryKey:['recentprouducts'],
    queryFn: getProducts,
    staleTime:1000
  })
  console.log(data?.data?.data);
  
  return (
    <>
      <div className="flex flex-wrap items-center h-screen p-5">
        {data?.data?.data.length > 0 ? (
          data?.data?.data.map((product) => (
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
                  <i className="fas fa-shopping-cart"></i>{" "}
                  {Loading && currentid == product.id ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "add to cart"
                  )}
                </button>
                <button onClick={()=>addWish(product.id)}>
                  <i className=" text-pink-500 fas fa-heart"></i>
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
    </>
  );
}
