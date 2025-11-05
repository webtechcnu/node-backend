import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
      trim: true, // removes extra spaces
      minlength: [2, "userName must be at least 2 characters long"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true, // removes extra spaces
      minlength: [2, "Password must be at least 2 characters long"]
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false } // disables the "__v" version field
);


// Export model so it can be used in routes or controllers
export const User = mongoose.model("User", userSchema);