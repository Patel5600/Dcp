const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 4000; // Use environment variable or default to 4000

app.use(cors());
app.use(express.json());

const announcements = [
  { id: 1, title: 'Welcome to the new Department Platform!', content: 'We are excited to launch our new platform. We hope you find it useful.' },
  { id: 2, title: 'Mid-term Exams Schedule', content: 'The mid-term exams schedule has been published. Please check the resources page for more details.' },
  { id: 3, title: 'Guest Lecture on AI', content: 'We are pleased to announce a guest lecture on Artificial Intelligence by Dr. John Doe. The lecture will be held on November 15, 2025.' },
];

// Notes API: sample seed data
const notes = [
  { id: 1, title: 'Lecture 1 - Intro', content: 'Slides + sample code.' },
  { id: 2, title: 'Database Notes', content: 'ER diagrams and schema.' }
];

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

// ------------------- Forum API -------------------
let forumPosts = [
  { id: 1, title: 'Introduce Yourself', content: 'Say hi. Course, year, skills.' }
];
let forumComments = [];

app.get('/api/forum/posts', (req, res) => res.json(forumPosts));

app.get('/api/forum/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = forumPosts.find(p => p.id === id);
  const comments = forumComments.filter(c => c.postId === id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json({ post, comments });
});

app.post('/api/forum/posts', (req, res) => {
  const { title, content } = req.body;
  const post = { id: Date.now(), title, content, createdAt: Date.now() };
  forumPosts.unshift(post);
  res.status(201).json(post);
});

app.post('/api/forum/posts/:id/comments', (req, res) => {
  const postId = Number(req.params.id);
  const { content } = req.body;
  const comment = { id: Date.now(), postId, content, createdAt: Date.now() };
  forumComments.push(comment);
  res.status(201).json(comment);
});
// --------------------------------------------------
