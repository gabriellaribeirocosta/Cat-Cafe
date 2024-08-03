import { check, validationResult } from 'express-validator'

export const validateAddUser = [
  check('id')
    .notEmpty()
    .isString()
    .withMessage('Name is required and must be a string'),

  check('email')
    .notEmpty()
    .isString()
    .withMessage('Description is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req POST User validated')
    next()
  },
]
