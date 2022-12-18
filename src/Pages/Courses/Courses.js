import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
      {data.map((d) => (
        <p>{d.title}</p>
      ))}
    </div>
  );
};

export default Courses;
