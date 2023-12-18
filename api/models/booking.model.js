import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
  
  },
  time: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
   
    unique: true,
  },
});


const Booking = mongoose.model("User", userSchema);

export default Booking;
