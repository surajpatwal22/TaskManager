const { body, validationResult } = require('express-validator');

exports.taskValidationRules = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  
  body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('Description too long'),

  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),

  body('dueDate')
    .optional()
    .isISO8601().toDate().withMessage('Invalid due date format'),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extracted = errors.array().map(err => ({ field: err.param, msg: err.msg }));
    return res.status(422).json({ errors: extracted });
  }
  next();
};
