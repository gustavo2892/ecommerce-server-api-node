import 'dotenv/config';

import compression from 'compression';
import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

const isProduction = process.env.STATUS === 'production';
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

if (!isProduction) {
  app.use(morgan('dev'));
}

app.use(cors());
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }));
app.use(bodyParser.json({ limit: 1.5 * 1024 * 1024 }));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status !== 404) {
    console.warn('Error: ', err.message, new Date());
  }
  res.json({ errors: { message: err.message, status: err.status } });
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server ready on http://localhost:${PORT}`);
});
