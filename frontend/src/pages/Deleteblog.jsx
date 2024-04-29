import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Deleteblog = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        try {
          await axios.delete(`https://shoeshop-mern.onrender.com/category/${id}`)
          alert("deleted successfully");
          navigate("/admincategory");
        } catch (error) {
          console.log(error);
          alert("Failed to delete category");
        }
      };
  return (
    <>
      <h1 className="text-3xl my-4">Delete Category</h1>
      <div className="flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-center">
          Are you sure you want to delete this Category?
        </h3>

        <button
          className="p-4 bg-red-600 text-white m-4 w-full"
          onClick={handleDelete}
        >
          Yes delete it.
        </button>
      </div>
    </>
  )
}

export default Deleteblog
