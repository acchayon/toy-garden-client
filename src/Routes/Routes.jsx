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
        path: 'toy/:id',
        element: <SingleToy></SingleToy>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  },
  {
    path: '/allToy',
    element: <AllToy></AllToy>,
    children: [
      {
        path: 'mytoy',
        element: <MyToy></MyToy>
      },
      {
        path: 'addtoy',
        element: <AddToy></AddToy>
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