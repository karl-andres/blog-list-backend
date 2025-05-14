const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  author: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    validate: {
        validator: function(v) {
            return /^https?:\/\//.test(v)
        },
        message: 'URL must start with http:// or https://'
    }
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(),
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)