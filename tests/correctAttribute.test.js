const { test, after, before, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
        title: 'First test blog',
        author: 'Tester One',
        url: 'http://test1.com',
        likes: 1
    },
    {
        title: 'Second test blog',
        author: 'Tester Two',
        url: 'http://test2.com',
        likes: 2
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
})

test('test that the identifier property of each blog is id and not _id', async () => {
    const response = await api.get('/api/blogs')
    response.body.forEach(blog => {
        assert.strictEqual(typeof blog.id, 'string')
        assert.strictEqual(blog._id, undefined)
    })
})

after(async () => {
    await mongoose.connection.close()
})