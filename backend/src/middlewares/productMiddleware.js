import { check, validationResult } from 'express-validator'

export const validateAddProduct = [
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

  check('price').isInt().withMessage('Price is required and must be a string'),

  check('category')
    .notEmpty()
    .isString()
    .withMessage('Category is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req POST Product validated')
    next()
  },
]

export const validateUpdateProduct = [
  check('id').isInt().withMessage('Id is required and must be a integer'),

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

  check('price').isInt().withMessage('Price is required and must be a string'),

  check('category')
    .notEmpty()
    .isString()
    .withMessage('Category is required and must be a string'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req PUT Product validated')
    next()
  },
]

export const validateDeleteProduct = [
  check('id').isInt().withMessage('Id must be a integer'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    console.log('req DELETE Product validated')
    next()
  },
]
