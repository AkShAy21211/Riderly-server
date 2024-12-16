import jwt from "jsonwebtoken";
import SECRETS from "../config/index.js";


export const generateAccessToken = (payload) => {
  return jwt.sign(payload, SECRETS.JWT_SECRET, { expiresIn: "1h" });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, SECRETS.JWT_SECRET, { expiresIn: "7d" });
};

export const generateToken = (payload) => {
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  return { accessToken, refreshToken };
};
