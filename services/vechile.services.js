import VechileModel from "../models/vechile.model.js";

export const createNewVechile = async (vechileData) => {
  try {

    console.log(vechileData);
    
    const vechile = new VechileModel(vechileData);
    await vechile.save();

    if (vechile) {
      return {
        success: true,
        message: "Vechile created successfully",
      };
    }

    return {
      success: false,
      message: "Failed to create vechile",
    };
  } catch (error) {
    console.error(error);
  }
};
