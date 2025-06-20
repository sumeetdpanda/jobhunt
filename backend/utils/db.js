import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected suceessfully");
  } catch (error) {
    console.log("Issues connecting to MongoDB");
    console.log(error);
  }
};

export default connectDB;
