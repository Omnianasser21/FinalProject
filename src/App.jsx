
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Layout from './componets/Layout/Layout';
import Brand from './componets/Brand/Brand';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Proudcts from './componets/Prouduts/Proudcts';
import Catergries from './componets/Categraies/Catergries';
import Regestier from './componets/Regestier/Regestier';
import UserContextProvider from './context/userContext';
import ProtectedRote from './componets/ProtectedRote/ProtectedRote';
import ProductDetails from './componets/ProductDetails/ProductDetils';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './context/CartContext';
import  { Toaster } from "react-hot-toast";
import Cart from './componets/Mycart/Cart';
import CheckOut from './componets/CheckOut/CheckOut';
import AllOrder from './componets/AllOrder/AllOrder';
import WishList from './componets/WishList/WishList';
import WishListConxtProvider from './context/WishListContext';







let query = new QueryClient();





let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRote>
            <Home />
          </ProtectedRote>
        ),
      },
      {
        path: "brand",
        element: (
          <ProtectedRote>
            <Brand />
          </ProtectedRote>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRote>
            <WishList />
          </ProtectedRote>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRote>
            <AllOrder />
          </ProtectedRote>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRote>
            <CheckOut />
          </ProtectedRote>
        ),
      },
      {
        path: "/mycart",
        element: (
          <ProtectedRote>
            <Cart />
          </ProtectedRote>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "products",
        element: (
          <ProtectedRote>
            <Proudcts />{" "}
          </ProtectedRote>
        ),
      },
      {
        path: "/productDetails/:id/:category",
        element: (
          <ProtectedRote>
            <ProductDetails />{" "}
          </ProtectedRote>
        ),
      },
      { path: "Resg", element: <Regestier /> },
      {
        path: "Cat",
        element: (
          <ProtectedRote>
            <Catergries />{" "}
          </ProtectedRote>
        ),
      },
    ],
  },
]);

function App() {


  return (
    <UserContextProvider>
      <QueryClientProvider client={query}>
        <CartContextProvider>
          <WishListConxtProvider>
            <RouterProvider router={x}></RouterProvider>
          </WishListConxtProvider>

          <Toaster />
        </CartContextProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App
