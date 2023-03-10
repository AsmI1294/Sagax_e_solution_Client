import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SubMain from "../Layout/SubMain";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import CheckOut from "../Pages/CheckOut/CheckOut";

import EachCoursesCard from "../Pages/EachCoursesCard/EachCoursesCard";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRouting from "../PrivateRoute/PrivateRouting";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        element: <SubMain></SubMain>,
        children: [
          {
            path: "/courses",
            element: <Categories></Categories>,
            loader: () => {
              return fetch(`https://sagax-e-solution.vercel.app/courses`);
            },
          },
          {
            path: "/courses/:id",
            element: <Categories></Categories>,
            loader: ({ params }) => {
              return fetch(
                `https://sagax-e-solution.vercel.app/courses/${params.id}`
              );
            },
          },
          {
            path: "/courses/eachCourses/:id",
            element: <EachCoursesCard></EachCoursesCard>,
            loader: ({ params }) => {
              return fetch(
                `https://sagax-e-solution.vercel.app/eachCourses/${params.id}`
              );
            },
          },
          {
            path: "/courses/eachCourses/checkOut/:id",
            element: (
              <PrivateRouting>
                <CheckOut></CheckOut>
              </PrivateRouting>
            ),
            loader: ({ params }) => {
              return fetch(
                `https://sagax-e-solution.vercel.app/eachCourses/${params.id}`
              );
            },
          },
        ],
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/faq", element: <Faq></Faq> },
      {
        path: "/profile",
        element: (
          <PrivateRouting>
            <Profile></Profile>
          </PrivateRouting>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div className="display-1"> 404! You have come to wrong path</div>,
  },
]);
