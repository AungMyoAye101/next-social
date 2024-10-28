import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("connect to db");
  } catch (error) {
    console.log(error + "Failed to connect db");
  }
};
