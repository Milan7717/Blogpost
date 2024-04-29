import axios from "axios";
import React, { useState } from "react";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
    };

    try {
      const response = await axios.post("http://localhost:3000/blog", data);

      console.log("Response:", response.data); 
      alert("Successfully added Blog.");
    } catch (error) {
      console.log("Error:", error);
      console.log("Error Response:", error.response);
      alert("An error occurred while creating your Blog");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form className="w-[60%] border-2 border-red-500 rounded-lg p-4 flex flex-col">
          <h1 className="my-4 text-center text-2xl">Add Blog</h1>
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
            <label className="mx-2 w-[35%]">Title :</label>
            <input
             name="content"
             type="text"
             value={content}
             onChange={(e) => setContent(e.target.value)}
              placeholder="Title of Blog"
              required
              className="bg-transparent w-[65%] border-[1px] border-gray-500 rounded-xl p-2"
            />
          </div>
          {/* <div className="my-4 flex">
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
          </div> */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 rounded-lg my-4 p-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addblog;
