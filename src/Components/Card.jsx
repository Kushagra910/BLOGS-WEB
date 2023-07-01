import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div key={post.id}>
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold text-md text-center sm:text-justify sm:text-lg md:text-xl">{post.title}</p>
      </NavLink>
      <p className="text-sm mt-[4px] text-center sm:text-justify">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm mt-[4px] text-center sm:text-justify">Posted on {post.date}</p>
      <p className="text-md mt-[14px]">{post.content}</p>
      <div className="flex  flex-wrap text-center gap-x-3 my-2 justify-center sm:justify-normal">
        {post.tags.map((tag, index) => {
          return (
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span
                key={index}
                className="text-blue-600 underline font-bold text-xs "
              >{`#${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
