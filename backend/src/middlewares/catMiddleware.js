import { check, validationResult } from 'express-validator'

export const validateAddCat = [
  check('user_id')
    .notEmpty()
    .isString()
    .withMessage('User ID is required and must be a string'),

  check('name')
    .notEmpty()
    .isString()
    .withMessage('Name is required and must be a string'),

  check('description')
    .notEmpty()
    .isString()
    .withMessage('Description is required and must be a string'),

  check('race')
    .notEmpty()
    .isString()
    .withMessage('Race is required and must be a string'),

  check('category')
    .notEmpty()
    .isString()
    .withMessage('Category is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req POST Cat validated')
    next()
  },
]

export const validateUpdateCat = [
  check('id').isInt().withMessage('Id must be a integer'),

  check('user_id')
    .notEmpty()
    .isString()
    .withMessage('User ID is required and must be a string'),

  check('name')
    .notEmpty()
    .isString()
    .withMessage('Name is required and must be a string'),

  check('description')
    .notEmpty()
    .isString()
    .withMessage('Description is required and must be a string'),

  check('race')
    .notEmpty()
    .isString()
    .withMessage('Race is required and must be a string'),

  check('category')
    .notEmpty()
    .isString()
    .withMessage('Category is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req PUT Cat validated')
    next()
  },
]

export const validateDeleteCat = [
  check('id').isInt().withMessage('Id must be a integer'),
  (req, res, next) => {
    const errors = validationResult(req)
    console.log('req DELETE Cat validated')
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  },
]
