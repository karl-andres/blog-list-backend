# Backend — Blog List

This is the **backend** server of the project. It provides the RESTful API and handles all data operations using MongoDB Atlas.

> This backend **must be used together with the frontend**:  
> [Frontend Repository](https://github.com/karl-andres/blog-list-frontend)

---

## Features

- RESTful API for frontend consumption
- MongoDB Atlas for cloud database storage
- Environment variable support for configuration
- Nodemon/dev server for local development

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/karl-andres/blog-list-backend
cd blog-list-backend
npm install
```

### 2. Set Up Environment Variables

```bash
MONGODB_URI=your_mongodb_connection_string
```

### 3. Run the server

```bash
npm run dev
```

## Acknowledgments

This project is part of the exercises from the [Full Stack Open](https://fullstackopen.com/en/) course by the University of Helsinki.

All rights and credits for the original exercises and project concept belong to the Full Stack Open team.
