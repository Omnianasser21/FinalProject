import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Catergries() {
  const [categries, setCategries] = useState([]);

  function GetCat() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        console.log(res.data.data);
        setCategries(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    GetCat();
  }, []);

  return (
    <div className=" ">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
        Categories
      </h2>

      <div className=" flex  justify-center flex-wrap gap-2">
        {categries.length > 0 ? (
          categries.map((category) => (
            <div
              key={category._id}
              className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-6 mb-10"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={category.image}
                  alt={category.name}
                />
              </a>
              <div className="p-5 text-center">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold text-gray-900">
                    {category.name}
                  </h5>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}
      </div>
    </div>
  );
}
