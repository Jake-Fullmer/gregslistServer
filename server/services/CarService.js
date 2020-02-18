import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Car", Car);

class CarService {
  async getAll() {
    return await _repository.find({});
  }
  async findById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
}

const carService = new CarService();
export default carService;
