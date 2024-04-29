import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const blogModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Blogpost = mongoose.model("Post", blogModelSchema);
