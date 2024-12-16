const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body); // Validates the body
      next();
    } catch (e) {
      res.status(400).json({ message:"All feilds required" }); // Return error if validation fails
    }
  };
};

export default validateRequest;
