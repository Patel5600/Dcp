const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const announcements = [
  { id: 1, title: 'Welcome to the new Department Platform!', content: 'We are excited to launch our new platform. We hope you find it useful.' },
  { id: 2, title: 'Mid-term Exams Schedule', content: 'The mid-term exams schedule has been published. Please check the resources page for more details.' },
  { id: 3, title: 'Guest Lecture on AI', content: 'We are pleased to announce a guest lecture on Artificial Intelligence by Dr. John Doe. The lecture will be held on November 15, 2025.' },
];

app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
