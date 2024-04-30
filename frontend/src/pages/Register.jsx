import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
          firstName,
          lastName,
          userName,
          password,
        };
    
        try {
          await axios.post("http://localhost:3000/auth/register", data);
          navigate("/");
          alert("User registered successfully");
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div className='min-h-screen text-lg w-full bg-zinc-900 text-white font-["neo-montreal"]'>
    <div className="w-full min-h-screen  flex items-center justify-center pt-16 ">
      <form
        style={{ backgroundImage: `url(/src/pages/img/login.jpg)` }}
        action=""
        className=" bg-center bg-cover flex flex-col gap-6 items-center w-[90%] sm:w-[70%] md:w-[50%] p-4 sm:p-6 md:p-10 border-[1px] border-zinc-800 rounded-xl"
      >
        <h1 className="capitalize tracking-wider text-4xl bg-blue-900 p-2 rounded-xl font-bold">
          Sign Up
        </h1>
        <div className="flex flex-col md:gap-10 sm:gap-6 gap-4">
          <div className=" justify-center items-center flex gap-4">
            <label className="w-[40%]">First Name :</label>
            <input
              className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg"
              value={firstName}
              required
              type="text"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className=" justify-center items-center flex gap-4">
            <label className="w-[40%]">Last Name :</label>
            <input
              className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg"
              value={lastName}
              required
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className=" justify-center items-center flex gap-4">
            <label className="w-[40%]">UserName :</label>
            <input
              className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg"
              value={userName}
              required
              type="text"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className=" justify-center items-center flex gap-4">
            <label className="w-[40%]">Password :</label>
            <input
              className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg"
              value={password}
              required
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:scale-110 transition-all rounded-lg p-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Register
