import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/${id}`)
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [id]);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="min-h-screen md:mx-32 lg:mx-36 sm:mx-24 mx-8 pt-24 text-lg flex flex-col gap-10">
          <p className="text-center text-4xl capitalize">{data?.title}</p>
          <p>{data?.content}</p>
          </div>
          
        </>
      )}
    </>
  );
};

export default SingleBlog;
