import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "social",
    });
    console.log("connected to db");
  } catch (error) {
    console.log("Failed to connect db", error);
  }
}
