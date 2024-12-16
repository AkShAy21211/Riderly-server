import { Schema, model } from "mongoose";

const VehicleSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  fuel_type: { type: String, required: true },
  seating: { type: Number, required: true },
  price: { type: Number, required: true },
  availability: {
    type: String,
    required: true,
    enum: ["Available", "Unavailable", "Maintenance"],
    default: "Available",
  },
  mileage: { type: Number, required: true },
  transmission: { type: String, required: true },
  air_bag: { type: Number, required: true },
  power_steering: { type: Boolean, required: true },
  insurance: { type: String, required: true },
  pollution: { type: Number, required: true },
  color: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  image_url: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
});

VehicleSchema.index({ location: "2dsphere" });

const VechileModel = model("Vechile", VehicleSchema);

export default VechileModel;
