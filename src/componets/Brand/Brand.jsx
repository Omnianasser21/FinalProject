import React, { useState } from "react";
import img1 from "../../assets/apple.png";
import img2 from "../../assets/canon.png";
import img3 from "../../assets/dell.png";
import img4 from "../../assets/nokia.png";
import img5 from "../../assets/oppo.png";
import img6 from "../../assets/lenovo.png";

export default function Brand() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const products = [
    { id: 1, name: "Apple", description: "High-quality product", image: img1 },
    {
      id: 2,
      name: "Canon",
      description: "Professional photography gear",
      image: img2,
    },
    {
      id: 3,
      name: "Dell",
      description: "Reliable laptops and PCs",
      image: img3,
    },
    {
      id: 4,
      name: "Nokia",
      description: "Strong and durable phones",
      image: img4,
    },
    {
      id: 5,
      name: "Oppo",
      description: "Innovative camera technology",
      image: img5,
    },
    {
      id: 6,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
    {
      id: 9,
      name: "Lenovo",
      description: "Powerful business laptops",
      image: img6,
    },
  ];

  return (
    <>
      <div className="text-center font-bold text-pink-500 text-2xl">All Brands
         </div>

      <div className="p-5 grid grid-cols-3 gap-4">
        {/* ✅ عرض المنتجات داخل `map` */}
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setIsOpen(true);
            }}
            className="cursor-pointer hover:shadow-lg max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <img
              className="w-full rounded-t-lg"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-center font-bold p-2">{product.name}</h2>
          </div>
        ))}

        {/* ✅ المودال يظهر عند النقر على أي منتج */}
        {isOpen && selectedProduct && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative p-4 w-auto max-w-full bg-white rounded-lg shadow-lg">
              {/* زر الإغلاق */}
              <div className="flex justify-end p-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              {/* محتوى المودال */}
              <div className="flex items-center gap-4 p-4 w-full">
                <img
                  className="w-1/2 h-auto rounded-lg object-cover"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                <div className="w-1/2 flex flex-col justify-center">
                  <h2 className="font-bold text-lg text-center md:text-left">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 text-center md:text-left">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* زر الإغلاق */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
