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

test('notes can be added using POST', async () => {
    const newBlog = {
        title: 'Third test blog',
        author: 'Tester Three',
        url: 'http://test3.com',
        likes: 3
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const endBlogs = await Blog.find({})
    assert.strictEqual(endBlogs.length, initialBlogs.length + 1)
})


after(async () => {
    await mongoose.connection.close()
})