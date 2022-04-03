const { validationResult } = require('express-validator');
const { check } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

// const businessValidator = [
//   check("title")
//   .exists({ checkFalsy: true })
//   .withMessage("Please provide a value for Title")
//   .isLength({ max: 50 })
//   .withMessage("Title must not be more than 50 characters long"),
//   check("content")
//   .exists({ checkFalsy: true })
//   .withMessage("Please provide a value for Content"),
//   check("topicType")
//   .exists({ checkFalsy: true })
//   .withMessage("Please provide a value for Topic Type")
//   .isLength({ max: 50 })
//   .withMessage("Topic Type must not be more than 50 characters long"),
// ];

module.exports = {
  handleValidationErrors
};
