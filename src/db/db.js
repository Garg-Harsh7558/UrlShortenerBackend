import mongoose from "mongoose";

const ConnectDB=async ()=>{
  console.warn("checkig db connect")
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`) 
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to MongoDB",error);
    process.exit(1);
  }
}

export default ConnectDB;