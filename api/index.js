import express from "express";
import mongoose from "mongoose";
import bookingRouter from "./routes/booking.route.js";
import path from "path";
// import dotenv from "dotenv";


// dotenv.config();

mongoose
  .connect('mongodb+srv://saloontoronto:saloontoronto@booking.makscrx.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


const __dirname = path.resolve()
const app = express();


app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
})

app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use("/api", bookingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
