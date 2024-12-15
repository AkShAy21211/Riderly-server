import bcryptjs from "bcryptjs";

export const hashpassword = async (password) => {

  
  // Generate a salt
  const salt = await bcryptjs.genSalt(10);

  // Hash the password with the salt
  const hashPassword = await bcryptjs.hash(password, salt);
  return hashPassword;
};

export const comparePasswords = async (password, hashedPassword) => {
  // Compare the input password with the hashed password
  const isPasswordMatch = await bcryptjs.compare(password, hashedPassword);
  return isPasswordMatch;
};
