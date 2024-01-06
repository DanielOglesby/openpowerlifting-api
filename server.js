import express from 'express';
import { sql } from "@vercel/postgres";
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();

app.get('/sample', async (req, res) => {
  const { rows } = await sql`SELECT * FROM powerlifting_results LIMIT 100;`;
  res.json({ rows });
});

app.get('/api', async (req, res) => {
  const lifter1 = req.query.lifter1;
  const lifter2 = req.query.lifter2;

  const lifter1Data = await sql`SELECT * FROM powerlifting_results WHERE name = ${lifter1};`;
  const lifter2Data = await sql`SELECT * FROM powerlifting_results WHERE name = ${lifter2};`;
  res.json({ lifter1Data, lifter2Data });
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});