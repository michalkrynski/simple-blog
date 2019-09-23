
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// Import routes definitions
import postRoutes from './routes/post';
import userRoutes from './routes/user';
// Configs
import DB from './config/database';
// Error handlers middlewares
import { notFound, errorHandler } from './middleware/error';

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Database connection
mongoose.connect(DB.url, DB.settings);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Serve static files
app.use(express.static('public'));

// API Routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
