import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";

const BlogsPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading ,myStyle,posts} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const NewbaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${NewbaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error Occurred in Api Calling");
      }
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRelatedBlogs();
  }, [location.pathname]);

  return (
    <div className={`w-full ${ (posts.length <=1 ) ? ('h-screen') : 'h-full' }  flex flex-col justify-center items-center`} style={myStyle}>
      <Header />
      <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-12">
        <div className="flex flex-col gap-5 justify-start items-baseline">
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <Card post={blog} />
            <h2 className="font-semibold text-xl text-center sm:text-justify  sm:text-2xl mt-10 mb-10">Related Blogs</h2>
            {relatedBlogs.map((post) => (
              <div>
                <Card key={post.id} post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className=" w-full h-screen flex justify-center items-center" style={myStyle}>
            <p>No Blogs Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
