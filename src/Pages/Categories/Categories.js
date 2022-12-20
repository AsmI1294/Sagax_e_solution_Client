import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";
import { ImWarning } from "react-icons/im";

const Categories = () => {
  const data = useLoaderData();

  return (
    <div>
      {data.length != 0 ? (
        data.map((d) => <Courses data={d}></Courses>)
      ) : (
        <div className=" display-5 d-flex justify-content-center mt-4">
          <ImWarning />
          <p className="text-center ms-2">No courses found in this category</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
