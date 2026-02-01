import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Components/Menu";
import Coffee from "./Menu/Coffee";
import App from "./App";
import Login from "./Authentication/LoginPage";
import Register from "./Authentication/Register";
import AdminPage from "./Components/AdminPages/AdminPage";
import { Authenticate } from "./useAuth";
import Privetrouter from "./privetrouter";
import MainlayoutAuth from "./MainLayout";
import Profile from "./Components/UserProfile/Profile";
import Dashboard from "./Components/UserProfile/Dashboard";
import Order from "./Components/UserProfile/Order";
import Favorite from "./Components/UserProfile/Favorites";
import Faq from "./Components/UserProfile/FAQ";
import Settings from "./Components/UserProfile/Settings";
import OrderMenu from "./Components/UserProfile/OrderMenu";




const router = createBrowserRouter([

      {
            element: <Authenticate><MainlayoutAuth/></Authenticate>,
            children: [
                  {path: "login", element:   <Login/>  },
                  {path: "register", element: <Register/>},
                  {path: "admin", element: <Privetrouter><AdminPage/></Privetrouter>},
            ]
      },


      {
            path: "/",
            element:( <Authenticate><App/></Authenticate>),

            children: [
                  { index: true, element: <Coffee /> },
                  { path: ":slug", element: <Coffee /> },
            ], 
      },   
      {
            path: "profile",
            element:(<Authenticate><Privetrouter><Profile/></Privetrouter></Authenticate>),

            children: [
                  {index: true, element: <Dashboard/>},
                  {path: "dashboard", element: <Dashboard/>},
                  {path: "order", element: <Order/>,
                        children: [
                              {index: true, element: <OrderMenu/>},
                              {path: ':slug', element: <OrderMenu/>},
                        ]


                  },
                  {path: "favorite", element: <Favorite/>},
                  {path: "faq", element: <Faq/>},
                  {path: "settings", element: <Settings/>},
            ]
      
      }
]);

export default function Router() {
      return <RouterProvider router={router}/>
}

