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
          {console.log(data)}
          <p>title : {data?.title}</p>
          <p>Content : {data?.content}</p>
          
        </>
      )}
    </>
  );
};

export default SingleBlog;
