require('dotenv').config()

const PORT = process.env.PORT || 3003

// both env variables test uri and normal uri are the same.
// for the sake of learning i don't intend to create two databases
const MONGODB_URI = process.env.NODE_ENV == 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = { MONGODB_URI, PORT }