import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from "../../views/Dashboard";
  import Detail from "../../views/Detail";
  // import 
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/detail/:adId", 
              element: <Detail />,
    }
  ]);
  
  function AppRouter() {
    return <RouterProvider router={router} />;
  }
  
  export default AppRouter;
  