import React from "react";
import { InfinitySpin } from  'react-loader-spinner'
import {  LoaderAnimation } from "./Loader.styled";
 const Loader = () => {
   return ( 
  <LoaderAnimation> <InfinitySpin 
  width='150'
  color="#041d08" />
       </LoaderAnimation>  
    )
}

export default Loader;