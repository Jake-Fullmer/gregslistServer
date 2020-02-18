import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    // _id: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;