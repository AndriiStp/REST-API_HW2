const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      const error = new Error("missing fields");
      error.status = 400;
      return next(error);
    }
    const { error } = schema.validate(req.body);
    if (error) {
      throw next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
