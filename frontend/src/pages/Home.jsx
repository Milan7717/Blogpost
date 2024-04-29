import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog");
        console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen md:mx-32 lg:mx-36 sm:mx-24 mx-8 pt-24 text-lg font-sans">
        <h1 className="my-4 md:text-6xl sm:text-5xl text-4xl font-bold ">
          Blogs
        </h1>
        <Link to="/addblog">
          <button className="p-2 bg-blue-600 rounded-xl">Add Blog</button>
        </Link>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-10 gap-10">
          {blog.map((data, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                <Blogcard
                  title={data.title}
                  content={data.content}
                  id={data._id}
                  time={data.createdAt}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
