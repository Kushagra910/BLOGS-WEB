import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <Header />
      <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-12">
        <div className="flex flex-col gap-5 justify-start items-baseline">
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => navigate(-1)}
          >
            back
          </button>
          <h2 className="font-bold text-2xl">
            Blogs Tagged{" "}
            <span className=" ml-1 underline font-bold text-blue-600">
              #{tag}
            </span>
          </h2>
        </div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default TagPage;
