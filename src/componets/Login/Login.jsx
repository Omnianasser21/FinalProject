
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userContext } from './../../context/userContext';
import { useContext } from "react";





export default function Login() {


  let{UserLogin,setUserLogin}=useContext(userContext)
  
  const [Apierror,setApierror] = useState('');
  const [spniner,setspniner] = useState(false)
  let navagite=useNavigate()
  let myvad = yup.object({ email: yup.string().email("must vaild").required("must requried"),
    password: yup
      .string()
      .required("must requrd")
      .min(6, "must requred 6 and strong"),
  

  });

   function sumbitLogin(Object) {
    setspniner(true)
   
   axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",Object)
    .then((res)=>{
      setspniner(false)
      if(res.data.message=='success'){
        localStorage.setItem('userToken',res.data.token)
        setUserLogin(res.data.token)
        navagite('/')


      }
// console.log(res.data.message)

    })
    .catch((res)=>{
      // console.log(res.response.data.message);
      setspniner(false)
     setApierror(res.response.data.message)
    
      
          })


// if(res.data.message=='success'){
//   //go home
//   navagite('/')
  
// }else{
//   //show error
// }
  }
 
  let fromik = useFormik({
    initialValues: {
    
      email: "",
      password: "",
     
    },
    validationSchema: myvad,
    onSubmit:sumbitLogin,
  });

  return (
    <>
   
      <form onSubmit={fromik.handleSubmit} className="max-w-md mx-auto ">
     {Apierror ? <div className="w-1/2 bg-red-700 rounded-lg text-white mx-auto">
{Apierror}
</div>:null}
        <h1 className="text-pink-600 font-bold  text-center ">Login Now</h1>
     
    
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="email"
            value={fromik.values.email}
            onChange={fromik.handleChange}
            onBlur={fromik.handleBlur}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {fromik.errors.email && fromik.touched.email ? (
            <div className="p-4 mb-3 text-red-700 text-center" role="alert">
              <span className="font-medium"> {fromik.errors.email}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value={fromik.values.password}
            onChange={fromik.handleChange}
            onBlur={fromik.handleBlur}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {fromik.errors.password && fromik.touched.password ? (
            <div className="p-4 mb-3 text-red-700 text-center" role="alert">
              <span className="font-medium"> {fromik.errors.password}</span>
            </div>
          ) : null}
        </div>
     
     
        <div className="flex gap-2 items-center">
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 "
        >
        {spniner ? <i className="fas fa-spinner fa-spin "></i>  : 'sumbit' }
        </button>
    
      
        </div>

        
      </form>
    </>
  );
}

