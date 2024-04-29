import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Editblog = () => {
  const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blog/${id}`);
        console.log(response.data);
       
        const blogData = response.data;
        setTitle(blogData.title);
        setContent(blogData.content);
      
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [id]);;

  const handleEdit = async () => {
    const data = {
      title,
      content,
    };
    try {
      await axios.put(`http://localhost:3000/blog/${id}`, data);
      navigate("/home")
      alert("Successfully edited blog");
    } catch (error) {
      console.log(error);
      alert("Error editing blog");
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-[100vh]">
      <form className="w-[60%] border-2 border-red-500 rounded-lg p-4 flex flex-col">
        <h1 className="my-4 text-center text-2xl">Edit Blog</h1>
        <div className="my-4 flex">
            <label className="mx-2 w-[35%]">Title :</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title of Blog"
              required
              className="bg-transparent w-[65%] border-[1px] border-gray-500 rounded-xl p-2"
            />
          </div>
          
          <div className="my-4 flex">
            <label className="mx-2 w-[35%]">Content :</label>
            <textarea
              required
              className="bg-transparent w-[65%] border-[1px] border-gray-500 rounded-xl p-2"
              name="content"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content of Blog"
              id=""
              cols="50"
              rows="10"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleEdit}
              className="bg-blue-500 rounded-lg my-4 p-2"
            >
              Add
            </button>
          </div>
      </form>
    </div>
  </>
  )
}

export default Editblog
