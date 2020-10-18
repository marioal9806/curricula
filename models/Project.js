const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
  description: { type: String },
  url_repo: { type: String }
})

const Project = mongoose.model('Project', ProjectSchema)
module.exports = Project