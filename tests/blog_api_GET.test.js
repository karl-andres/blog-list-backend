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

test('all notes are returned from GET', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('correct amount of blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, initialBlogs.length)
})

after(async () => {
    await mongoose.connection.close()
})