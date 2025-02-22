import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Cart() {
  const { getLoggedProduct, DeleteCart, UpdatesCart, numItem, setnumItem } =
    useContext(CartContext);
  const [cart, setCart] = useState(null);


  async function getCartlog() {
    const resp = await getLoggedProduct();
    if (resp.data.status === "success") {
      setCart(resp.data.data);
    }
  }

  async function updateCart(id, count) {
    if (count <= 0) {
      deleteCartItem(id);
    } else {
      const reso = await UpdatesCart(id, count);
      if (reso.data.status === "success") {
        setCart(reso.data.data);
        toast.success("Updated successfully!");
      } else {
        toast.error("Failed to update the cart.");
      }
    }
  }

  async function deleteCartItem(productId) {
    const resi = await DeleteCart(productId);
    if (resi.data.status === "success") {
      setnumItem(numItem -1)
      setCart(resi.data.data);
      toast.success("Item removed successfully!");
    } else {
      toast.error("Failed to remove the item.");
    }
  }

  useEffect(() => {
    getCartlog();
  }, []);

  return (
    <>
      {cart?.products.length > 0 ? (
        <>
          <h2 className="font-bold my-6 text-center capitalize text-pink-700">
            Total Price: {cart?.totalCartPrice}{" "}
            <i class="fa-solid fa-money-bill"></i>
          </h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-16 py-3">Image</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((product) => (
                  <tr key={product.product.id} className="bg-gray-200 border-b">
                    <td className="p-4">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32"
                        alt={product.product.title}
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            updateCart(product.product.id, product.count - 1)
                          }
                          className="p-1 text-sm font-medium h-6 w-6 border rounded-full hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="mx-3">{product.count}</span>
                        <button
                          onClick={() =>
                            updateCart(product.product.id, product.count + 1)
                          }
                          className="p-1 text-sm font-medium h-6 w-6 border rounded-full hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {product.price * product.count}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteCartItem(product.product.id)}
                        className=" text-pink-700 hover:underline"
                      >
                        <i className="fas fa-trash "></i>Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to={"/checkout"}>
              <button className=" text-white font-bold p-3 rounded-md text-center bg-pink-600 my-3">
                CheckOUT
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">The cart is empty.</p>
      )}
    </>
  );
}
