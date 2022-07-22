import mongoose from "mongoose";

const connectDB = async () => {
  const URI = process.env.MONGODB;
  if (URI !== undefined) {
    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    try {
      const conn = await mongoose.connect(URI, options);
      console.log(`MongoDB Connected:${conn}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
};

export default connectDB;
