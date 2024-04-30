import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { format } from "date-fns";
import {motion} from "framer-motion"

const Blogcard = (props) => {
  const { time, title, content, id } = props;

  const formattedDate = format(time, "MMM dd, yyyy");
  return (
    <div className="border-[1px] rounded-xl border-gray-[500]  w-full flex flex-col gap-4 justify-between overflow-hidden p-4">
      <div className="flex flex-col gap-6  min-h-[25vh]">
        <p className="text-2xl capitalize text-center">{title}</p>

        {/* Apply line-clamp class to truncate content after 3 lines */}
        <p className="line-clamp-3">{content}</p>

        {/* Display formatted date */}
      </div>
      <p className="text-sm text-gray-500">Date: {formattedDate}</p>
      <motion.div
      whileHover={{
        scale: 1.1,
        x:12,
        transition: { duration: 0.4},
      }}>
        <Link to={`/singleblog/${id}`}>
          <button className="p-2 bg-blue-600 rounded-xl">See More</button>
        </Link>
      </motion.div>
      <div className="flex justify-center gap-x-6 my-4">
        <Link className="bg-orange-900 rounded-full p-2" to={`/editblog/${id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-200" />
        </Link>
        <Link className="bg-white rounded-full p-2" to={`/deleteblog/${id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default Blogcard;
