import React from 'react'
import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const VisibilityToggle = () => {
  
   let [visibility , setVisibility] = useState() ;
    let  toggle=()=>{
         setVisibility(!visibility)
     }
     let navi = useNavigate() ; 

       let navigate= ()=>{
        navi(-1 ) ;
       }

        return (
          <div>
            <Header />
            <button onClick={navigate} className=" shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none mr-3 h-10">go back</button>
            <button
              onClick={toggle}
              className=" shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none mr-3 h-10"
            >
              {!!visibility ? "Hide Details" : "Show Details"}
            </button>
            <div>{!!visibility && <p>this is the details</p>}</div>
            {/* <Outlet /> */}
          </div>
        );

    }

    
    


export default VisibilityToggle ; 





