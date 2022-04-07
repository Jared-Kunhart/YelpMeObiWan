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

const businessNotFoundError = (id) => {
  const err = Error('Business not found');
  err.errors = [`Business with id of ${id} could not be found.`];
  err.title = 'Business not found.';
  err.status = 404;
  return err;
};

const validateBusiness = [
  check("title")
  .exists({ checkFalsy: true })
  .withMessage("You need a name for your business Scoundrel")
  .isLength({ max: 50 })
  .withMessage("Can't be longer than 50 parsecs"),
  check("description")
  .exists({ checkFalsy: true })
  .withMessage("Describe your business for future citizens"),
  check("location")
  .exists({ checkFalsy: true })
  .withMessage("Put a location so citizens know where to find your business !")
  .isLength({ max: 50 })
  .withMessage("Can't be longer than 50 parsecs"),
  check("imageUrl")
  .exists({ checkFalsy: true })
  .withMessage("You need to prove a way for citizens to see your business")
  .custom((value, filename) => {
    let extension = (path.extname(filename)).toLowerCase();
    switch (extension) {
        case '.jpg':
            return '.jpg';
        case '.jpeg':
            return '.jpeg';
        case  '.png':
            return '.png';
        default:
            return false;
      }
    })
    .withMessage("That extension name is not accepted here."),
  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  businessNotFoundError,
  validateBusiness
};
