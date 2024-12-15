import { loginService, registerService } from "../services/auth.services.js";

export const login = async (req, res) => {
  const newUser = await loginService(req.body);

  if (newUser?.success) {
    res.status(201).json(newUser);
    return;
  }
  res.status(400).json(newUser);
  return;
};

export const register = async (req, res) => {
  const newUser = await registerService(req.body);

  if (newUser?.success) {
    res.status(201).json(newUser);
    return;
  }
  res.status(400).json(newUser);
  return;
};
