import React from "react";

export default function({ children } : 
   { children : React.ReactNode}){


  return <div>
    <div>min 20% off</div>
    {children}
  </div>
}