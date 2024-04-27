import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
function Layout(props){
    
return(
    <>
    <Navbar title={props.title} mode={props.mode} toggle={props.toggle}/>
    <div className="container my-3 mx-3">
    <Outlet/>
      </div>
    </>
)
}
export default Layout