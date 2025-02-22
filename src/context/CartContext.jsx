import {  createContext, useEffect, useState } from "react";
import  axios  from 'axios';


 export let CartContext = createContext()

 export default function CartContextProvider(props){


  const [numItem, setnumItem] = useState(0)

 
    let headers = {
      token: localStorage.getItem("userToken"),
    };

   function AddProuductTOcart(productId) {
     return axios
       .post(
         `https://ecommerce.routemisr.com/api/v1/cart`,
         { productId },
         { headers }
       )
       .then((res) => {
        console.log(res)
        return res;
        
       })
       .catch((err) => {
         if (err.response) {
           return err.response;
         }
         throw err;
       });
   }

    function getLoggedProduct(){
     return axios
        .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
        .then((res) => {
          setnumItem(res?.data.numOfCartItems);
          console.log(res?.data);
          console.log(res?.data.numOfCartItems);
          return res
          
        }).catch((err)=>err)

    }

     function UpdatesCart(productId,newcount) {
       return axios
         .put(
           `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
           {count:newcount },{headers}
         )
         .then((res) => res)
         .catch((err) => err);
     }
     function DeleteCart(productId){
    return axios
        .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
          headers,
        })
        .then((res) => res)
        .catch((err) => err);
     }
       function CheckOUt(cartId,url,formdata) {
         return axios
           .post(
             `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
             { shippingAddress:formdata },{headers}
           )
           .then((res) => res)
           .catch((err) => err);
       }
     function addTowish(productId) {
       return axios
         .post(
           `https://ecommerce.routemisr.com/api/v1/wishlist`,
           { productId },
           { headers }
         )
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
         });
     }


    useEffect(()=>{
      getLoggedProduct()
        addTowish()
    })

    return (
      <CartContext.Provider
        value={{
          DeleteCart,
          setnumItem,
          numItem,
          CheckOUt,
          UpdatesCart,
          AddProuductTOcart,
          getLoggedProduct,
          addTowish
        }}
      >
        {props.children}
      </CartContext.Provider>
    );

 }