import mongoose, { model, models, Schema } from "mongoose";

const postSchmea = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  post: {
    type: String,
    require: [true, "post is required"],
  },
  image: {
    type: String,
  },
});

const Post = models.Post || model("Post", postSchmea);

export default Post;
