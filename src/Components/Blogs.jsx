import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Spinner.css";
import Card from "./Card";
import Spinner from "./Spinner";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const { posts, loading ,myStyle} = useContext(AppContext);
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div
      className={`w-11/12 max-w-[670px] h-full ${
        category ? "py-0" : "py-8"
      } flex flex-col gap-y-7 ${category ? "mt-0" : "mt-12"} mb-[70px] `}
      style={myStyle}
    >
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="flex justify-center items-center h-full" style={myStyle}>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
