import { Mongoose } from "mongoose";

export const connectDB = async (mongoURI) => {
    try {
        await Mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Mongo error:", err);
        throw err;
    }
};