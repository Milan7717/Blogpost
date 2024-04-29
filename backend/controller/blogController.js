import mongoose from "mongoose";
import { Blogpost } from "../models/blogmodel.js";

export const getAllPost = async (req, res) => {
  try {
    const blogpost = await Blogpost.find();
    return res.status(200).json(blogpost);
  } catch (error) {
    return res.this.status(500).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    //for invalid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const singlePost = await Blogpost.findById(id);
    //check if the id exist
    if (!singlePost) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(singlePost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//add blog post
export const addBlogPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).send({
        message: "send all field first",
      });
    }
    const newBlogPost = {
      title: req.body.title,
      content: req.body.content,
    };

    const blogPost = await Blogpost.create(newBlogPost);
    return res.status(201).send(blogPost);
  } catch (error) {
    return res.status(400).json({ message: "Error add blog post" });
  }
};

//editing blogpost

export const editBlog = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).send({
        message: "Send all fields",
      });
    }

    const { id } = req.params;
    const result = await Blogpost.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Couldnot find the Blog Id" });
    }

    return res.status(200).send({ message: "Successfully updated blog post" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//deleting th blog post
export const deleteblog = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Blogpost.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Error deleting the blog" });
    }
    return res.status(200).send({ message: "Successfully deleted blog" });
  } catch (error) {
    console.log(error);
  }
};
