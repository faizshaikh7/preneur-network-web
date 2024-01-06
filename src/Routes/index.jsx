import {
    createBrowserRouter,
  } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginComponent/>,
      
    },
  ]);