import {z} from "zod"

export const VehicleSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  type: z.string().min(1, "Type is required"),
  fuel_type: z.string().min(1, "Fuel type is required"),
  seating: z.number().int().min(1, "Seating must be at least 1"),
  price: z.number().min(0, "Price must be a positive number"),
  availability: z
    .enum(["Available", "Unavailable", "Maintenance"])
    .default("Available"),
  mileage: z.number().min(0, "Mileage must be a positive number"),
  transmission: z.string().min(1, "Transmission type is required"),
  air_bag: z.number(),
  power_steering: z.boolean(),
  insurance: z.string().min(1, "Insurance is required"),
  pollution: z.number().min(0, "Pollution must be a positive number"),
  color: z.string().min(1, "Color is required"),
  location: z.object({
    type: z.literal("Point"),
    coordinates: z.tuple([z.number(), z.number()]), // [longitude, latitude]
  }),
  image_url: z.string().url("Invalid URL for image"),
  description: z.string().min(1, "Description is required"),
});
