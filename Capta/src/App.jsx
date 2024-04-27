// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import About from './About';
import Form from './Form';
import Layout from './Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const toggle = () => {
    if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white"

    } else {
      setmode("dark")
      document.body.style.backgroundColor = "#212529"
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout title="Capta" mode={mode} toggle={toggle}/>,
      children:[
        {
          path:"",
          element:<Form heading="Enter Text To Capitalize" mode={mode} />
        },
        {
          path: "/about",
          element:<About mode={mode} />
        }
      ]
    } 
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
