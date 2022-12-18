import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SubMain from "../Layout/SubMain";
import Categories from "../Pages/Categories/Categories";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

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
          { path: "/courses", element: <Categories></Categories> },
          {
            path: "/courses/:id",
            element: <Courses></Courses>,
            loader: ({ params }) => {
              return fetch(
                `https://sagax-e-solution.vercel.app/courses/${params.id}`
              );
            },
          },
        ],
      },
    ],
  },
]);
