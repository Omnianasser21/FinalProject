import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Proudcts() {
    function getProducts() {
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }

    let { data, isError, isLoading, isFetching } = useQuery({
      queryKey: ["recentprouducts"],
      queryFn: getProducts,
      staleTime: 1000,
    });
    console.log(data?.data?.data);

    // const [Products, setProducts] = useState([]);

    // function GetProduct() {
    //   axios
    //     .get(`https://ecommerce.routemisr.com/api/v1/products`)
    //     .then((res) => {
    //       // console.log(res.data.data);

    //       setProducts(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.error("Error fetching products:", err);
    //     });
    // }

    // useEffect(() => {
    //   GetProduct();
    // }, []);

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
                  <button className="bg-pink-400 rounded-md w-[70%] m-4">
                    {" "}
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
      </>
    );
}
