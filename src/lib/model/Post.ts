import mongoose, { model, models, Schema } from "mongoose";

const postSchmea = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
