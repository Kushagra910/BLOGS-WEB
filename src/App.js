import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogsPage from "./pages/BlogsPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts , myStyle} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    // <div className="w-full h-full flex flex-col justify-center items-center ">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
    // </div>
    <div className="w-full h-full" style={myStyle}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogsPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
    </div>
  );
}
