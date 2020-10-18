const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment