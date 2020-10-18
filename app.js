const express = require('express')
const { body, validateResult, validationResult } = require('express-validator')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000

const app = express()

// MongoDB Connection
mongoose.set('debug', true)
const db = require('./config/keys').MongoURI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

const Project = require('./models/Project')
const Comment = require('./models/Comment')

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

// Handle POST request of Comments Form 
app.post('/comment', [
  body('name', 'Please submit a name').not().isEmpty().matches(/^[a-z ,.'-]+$/i).trim(' ').withMessage('Please, restrict use of numeric or special characters'),
  body('email', 'The email is not valid').isEmail().normalizeEmail(),
  body('description', 'The description cannot be empty').not().isEmpty().isLength({max: 200}).escape().withMessage('Please, restrict the description under 200 characters')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const newComment = new Comment({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description
  })

  newComment.save()
    .then(comment => {
      res.status(200)
      res.json({ message: 'Your message has been sent!' })
    })
    .catch(err => console.log(err))
})

// Handle GET request to retrieve list of projects
app.get('/projects', (req, res) => {
  Project.find({}).exec()
    .then(projects => {
      res.json(projects)
    })
    .catch(err => console.log(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})