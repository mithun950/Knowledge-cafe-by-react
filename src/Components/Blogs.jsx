import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookMarks, handleMarkRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div className="md:w-2/3 mt-4">
       <h3 className="text-3xl mb-3 ">Blogs : {blogs.length}</h3>

       {
        blogs.map((blog) => <Blog 
        key={blog.id}
        handleBookMarks = {handleBookMarks}
        handleMarkRead = {handleMarkRead}
         blog={blog}></Blog>)
       }
       
  </div>;
};
Blogs.propTypes  = {
    handleBookMarks:PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blogs;
