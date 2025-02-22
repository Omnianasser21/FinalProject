import { useContext } from "react";
import logo from "../../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  let navigate = useNavigate();

  let { UserLogin, setUserLogin } = useContext(userContext);
  let { numItem } = useContext(CartContext);

  function Signout() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    navigate("/Login");
  }

  return (
    <>
      {/* ✅ Navbar ثابت بأعلى الصفحة ولن يغطي المحتوى */}
      <nav className="bg-slate-400 border-gray-200 fixed top-0 right-0 left-0 w-full shadow-lg z-50 p-5">
        <div className="flex flex-wrap lg:justify-between gap-3 items-center mx-auto max-w-screen-xl px-6">
          <div className="flex gap-2 items-center justify-center">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Logo" />
              <span className=" text-white self-center text-2xl font-semibold ">
                Fresh cart
              </span>
            </Link>
            {UserLogin != null ? (
              <ul className="flex gap-5">
                <li>
                  <Link className="text-slate-500" to="">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500 relative" to="/mycart">
                    MyCart
                    <i className="fas fa-cart-plus text-pink-600"></i>
                    <div className="bg-pink-600 absolute top-[-14px] right-[-13px] size-5 rounded-full text-white flex justify-center items-center">
                      {numItem}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500" to="brand">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500" to="wishlist">
                    WishList
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500" to="products">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-500" to="Cat">
                    Categories
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          <div className="cursor-pointer flex items-center space-x-6">
            <div className="flex gap-3 text-pink-600">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              {UserLogin != null ? (
                <span onClick={Signout} className="cursor-pointer">
                  Sign Out
                </span>
              ) : (
                <ul className="flex gap-4">
                  <Link to="login">Login</Link>
                  <Link to="Resg">Register</Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ تأكيد عدم تغطية الـ Navbar للمحتوى */}
      <div className=""></div>
    </>
  );
}
