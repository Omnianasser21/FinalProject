import React, { useContext, useEffect, useState } from "react";
import { WishListConxt } from "../../context/WishListContext";
import toast from "react-hot-toast";

export default function WishList() {
  let { gettoWishlist, Deletewhish } = useContext(WishListConxt);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWish();
  }, []);

  async function getWish() {
    let response = await gettoWishlist();
    if (response.data.status === "success") {
      setWishlist(response.data.data);
    }
  }

  // async function deleteWish(productId) {
  //   try {
  //     let response = await Deletewhish(productId);
  //     console.log(response);

  //     if (response.data.status === "success") {
  //       toast.success("Item removed from wishlist!");
  //       // ✅ تحديث القائمة بعد الحذف
  //       setWishlist(response.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to remove item!");
  //   }
  // }

  async function deleteWish(productId) {
    try {
      let response = await Deletewhish(productId);
      console.log(response);

      if (response.data.status === "success") {
        toast.success("Item removed from wishlist!");

        // ✅ تحديث القائمة بدون إعادة تحميل البيانات
        setWishlist((prevWishlist) =>
          prevWishlist.filter((product) => product.id !== productId)
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove item!");
    }
  }


  return (
    <>
      {wishlist.length > 0 ? (
        <>
          <h2 className="font-bold my-6 text-center capitalize text-pink-700 text-2xl">
            Your Wishlist <i className="fas fa-heart"></i>
          </h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-16 py-3">Image</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <tr
                    key={product.id}
                    className="bg-gray-200 border-b hover:bg-gray-100 transition duration-200"
                  >
                    <td className="p-4">
                      <img
                        src={product.imageCover}
                        className="w-16 md:w-32 rounded-md shadow-md"
                        alt={product.title}
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {product.title}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteWish(product.id)}
                        className="text-pink-700 font-bold hover:underline hover:text-red-600 transition duration-200"
                      >
                       <i className="fas fa-trash"></i> Remove
                      </button>
                      

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          Your wishlist is empty.
        </p>
      )}
    </>
  );
}
