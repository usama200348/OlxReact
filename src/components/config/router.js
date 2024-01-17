import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// import AdManagement from "../../AdManagement";
  import Dashboard from "../../views/Dashboard";
  import Detail from "../../views/Detail";
  import Login from "../../Login";
  import Register from "../../Register";
//  import AdManagement from "../../AdManagement";
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    // {
    //     path: "/AdManagement",
    //     element: <AdManagement />,
    // },
    {
        path: "/detail/:adId", 
              element: <Detail />,
    }
  ]);
  
  function AppRouter() {
    return <RouterProvider router={router} />;
  }
  
  export default AppRouter;
  