import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../ErrorPage/ErrorPage";
import AccessCourse from "../pages/AccessCourse/AccessCourse";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signIn',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/accessCourse',
                element:<PrivateRoute><AccessCourse></AccessCourse></PrivateRoute>,
                loader:()=> fetch('accesses.json')
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:()=> fetch('/services.json')
            }
        ]
    }
]);

export default router;