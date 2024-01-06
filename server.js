import express from 'express';

const app = express();

// Define a simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to your API!' });
});

// Set up a default route
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});