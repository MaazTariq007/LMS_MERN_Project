import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
