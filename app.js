const express = require('express')
const { body, validateResult, validationResult } = require('express-validator')
 
const PORT = process.env.PORT || 3000

const app = express()

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.post('/comment', [
  body('name', 'Please submit a name').not().isEmpty().matches(/^[a-z ,.'-]+$/i).trim(' ').withMessage('Please, restrict use of numeric or special characters'),
  body('email', 'The email is not valid').isEmail().normalizeEmail(),
  body('description', 'The description cannot be empty').not().isEmpty().isLength({max: 200}).escape().withMessage('Please, restrict the description under 200 characters')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  console.log(req.body)

  res.status(200)
  res.json({ message: 'Your message has been sent!' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})