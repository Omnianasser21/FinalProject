import React, { useContext } from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { CartContext } from '../../context/CartContext';


export default function CheckOut() {
  let { CheckOUt } = useContext(CartContext);

let fromik = useFormik({
  initialValues: {
    details: "",
    phone: "",
    city: "",
  },
  onSubmit: () =>
    handleCheckout(`67abbf018f5dbc08e677b583`, `http://localhost:5174`),
});

async function handleCheckout(cartId, url) {
 let ree=  await CheckOUt(cartId, url,fromik.values);
 console.log(ree.data.session.url);
 window.location.href = ree.data.session.url;
 
}



return (
  <>
    <form onSubmit={fromik.handleSubmit} className="max-w-md mx-auto ">
      <h1 className="text-pink-600 font-bold  text-center ">CheckOUt Now</h1>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="details"
          value={fromik.values.details}
          onChange={fromik.handleChange}
          onBlur={fromik.handleBlur}
          id="details"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="details"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          details
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="phone"
          value={fromik.values.phone}
          onChange={fromik.handleChange}
          onBlur={fromik.handleBlur}
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          phone
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="city"
          value={fromik.values.city}
          onChange={fromik.handleChange}
          onBlur={fromik.handleBlur}
          id="city"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="city"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          city
        </label>
      </div>

      <div className="flex gap-2 items-center">
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 "
        >
          CheckNow
        </button>
    
      </div>
    </form>
  </>
);
}
