import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();
const db = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());

app.get("/characters", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM characters");
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
