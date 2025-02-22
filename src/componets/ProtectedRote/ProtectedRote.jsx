import React from 'react'
import { Navigate } from 'react-router-dom'

Navigate

export default function ProtectedRote(props) {
if(localStorage.getItem('userToken')){
  return props.children
}else{
 return <Navigate  to={'/Login'} />
}
}
