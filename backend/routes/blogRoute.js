import express from "express";
import { addBlogPost, deleteblog, editBlog, getAllPost, getSinglePost } from "../controller/blogController.js";


const router =express.Router();


router.get("/",getAllPost);
router.get("/:id",getSinglePost)
router.post("/",addBlogPost)
router.put("/:id",editBlog)
router.delete("/:id",deleteblog)

export default router;