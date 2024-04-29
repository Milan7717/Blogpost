import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const Blogcard = (props) => {
  return (
    <div className="border-[1px] rounded-xl border-gray-600 h-[40vh] w-full flex flex-col gap-4 justify-between overflow-hidden ">
      <div className="flex flex-col gap-4">
        <div className="my-2">
          <p className="text-4xl text-center capitalize">{props.title}</p>
        </div>
        <div className="p-2">
          
          <p className="line-clamp-4">{props.content}</p>
        </div>
      </div>
      <div className="flex justify-center gap-x-6 my-4">
        <Link to={`/editblog/${props.id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600" />
        </Link>
        <Link to={`/deleteblog/${props.id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default Blogcard;
