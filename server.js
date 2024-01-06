import express from 'express';
import { sql } from "@vercel/postgres";
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();

  try {
    await psql`\copy pl_data FROM '/openpowerlifting.csv' WITH (FORMAT CSV, HEADER);`
  }
  catch(error){
    console.log('Error importing csv:', error);
  }



// Define a simple API endpoint
app.get('/api', async (req, res) => {
  const { rows } = await sql`SELECT * FROM lifters;`;
  res.json({ rows });
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