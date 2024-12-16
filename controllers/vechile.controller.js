import { createNewVechile } from "../services/vechile.services.js";

export const getAllVechile = async (req, res) => {
  
  const response = await createNewVechile(req.body);

  if (response.success) {
    res.status(201).json(response);
    return;
  }

  res.status(400).json(response);
  return;
};
