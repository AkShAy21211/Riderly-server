import UserModel from "../models/user.model.js";
import { comparePasswords, hashpassword } from "../utils/auth.js";
import { generateToken } from "../utils/token.js";

export const loginService = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return {
        message: "User not found",
        success: false,
      };
    }
    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return {
        message: "Invalid emaill or password",
        success: false,
      };
    }

    const token = generateToken({ userId: user._id, role: user.role });
    return {
      message: "Login successful",
      success: true,
      token: token.accessToken,
    };
  } catch (error) {
    console.error(error);
  }
};

export const registerService = async ({ name, email, phone, password }) => {
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return {
        message: "User already exists please login",
        success: false,
      };
    }

    const hashPassword = await hashpassword(password);
    const newUser = new UserModel({
      name,
      email,
      phone,
      password: hashPassword,
    });
    await newUser.save();
    return {
      message: "User registered successfully",
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
};
