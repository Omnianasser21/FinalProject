import { createContext, useContext } from "react";
import  axios  from 'axios';

 export let WishListConxt=createContext()

    let headers = {
      token: localStorage.getItem("userToken"),
    };

 function addtoWishlist(proudctid){
      let headers = {
        token: localStorage.getItem("userToken"),
      };
    return axios
      .post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        productId: proudctid,
      },{headers})
      .then((res) => res)
      .catch((err) => err);
    
 }
 function gettoWishlist(proudctid) {
   let headers = {
     token: localStorage.getItem("userToken"),
   };
   return axios
     .get(
       `https://ecommerce.routemisr.com/api/v1/wishlist`,
       { headers }
     )
     .then((res) => res)
     .catch((err) => err);
 }
     function Deletewhish(productId) {
       return axios
         .delete(
           `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
           {
             headers,
           }
         )
         .then((res) => res)
         .catch((err) => err);
     }

 export default function WishListConxtProvider(props) {
    return (
      <WishListConxt.Provider
        value={{ addtoWishlist, gettoWishlist, Deletewhish }}
      >
        {props.children}
      </WishListConxt.Provider>
    );

 }