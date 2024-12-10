import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';

import ErrorPage from './components/ErroePage/ErrorPage.jsx';
import AppliedJobs from './components/Appliedjobs/Appliedjobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:"/",
      element:<Home></Home>,
      
    },
    {
      path:'/applied',
      element:<AppliedJobs></AppliedJobs>
    }
  ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
