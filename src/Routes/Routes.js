import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CoursesDetails/CourseDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../components/Main/Main";
import Premium from "../components/Premium/Premium";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://tech-guru-server-miskatur.vercel.app/courses`)
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
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
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://tech-guru-server-miskatur.vercel.app/course-detail/${params.id}`)
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-guru-server-miskatur.vercel.app/course-detail/${params.id}`)
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
])