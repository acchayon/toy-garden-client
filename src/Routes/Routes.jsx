import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Blog from "../Page/Home/Blog/Blog";
import Error from "../Page/ErrorPage/Error";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import AllToy from "../Page/ToyPage/AllToy/AllToy";
import MyToy from "../Page/ToyPage/MyToy/MyToy";
import AddToy from "../Page/ToyPage/AddToy/AddToy";
import SingleToy from "../Page/Home/Shop/SingleToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Page/ToyPage/MyToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/allToy',
        element: <AllToy></AllToy>
      },
      {
        path: '/mytoy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: '/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/updatetoy',
        element: <UpdateToy></UpdateToy>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-garden-server-chi.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;