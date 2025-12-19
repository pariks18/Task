import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ProjectRoutes from './routes/ProjectRoutes.js';
import ClientRoutes from './routes/ClientRoutes.js';
import ContactRoutes from './routes/ContactRoutes.js';
import NewsLetterRoutes from './routes/NewsLetterRoutes.js';    
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT||5200;
app.use("/api/projects", ProjectRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/clients", ClientRoutes);
app.use("/api/newsletter", NewsLetterRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.error(err));
console.log("main backend file is running");

app.listen(PORT, () => console.log(`port ${PORT} connected`));

      