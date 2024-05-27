import express from 'express';
import { connect } from 'mongoose';
import ArticleRouter from './routes/ArticleRoute.js';
import  connectDB  from './db.js';
import { configDotenv } from 'dotenv';


const app = express();

app.use(express.json());

configDotenv();

app.use("/api", ArticleRouter);

const PORT = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
  res.send({ 'Hello World': 'Welcome to the Node.js World!' });
});

app.post('/', (req, res) => {
    res.send({ 'Hello World': 'Welcome to the Node.js World!' });
  });

app.put('/', (req, res) => {
    res.send({ 'Hello World': 'Welcome to the Node.js World!' });
  });

app.patch('/', (req, res) => {
    res.send({ 'Hello World': 'Welcome to the Node.js World!' });
  });

app.delete('/', (req, res) => {
    res.send({ 'Hello World': 'Welcome to the Node.js World!' });
  });
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});