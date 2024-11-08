import mongoose, { model, models, Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    require: [true, "post is required"],
  },
  image: {
    type: String,
  },
});

const Post = models.Post || model("Post", postSchema);

export default Post;
