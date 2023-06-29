import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <Header />
      <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-12">
        <div className="flex flex-col gap-5 justify-start items-baseline">
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <h2 className="font-bold text-2xl">
            Blogs on{" "}
            <span className="underline font-bold text-blue-600">
              #{category}
            </span>
          </h2>
        </div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryPage;
