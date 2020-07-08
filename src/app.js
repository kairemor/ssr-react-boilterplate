import express from 'express';
import path from 'path';
import template from './shared/template';
import ssr from './server/server';

const app = express();

// Serving static files
app.use('', express.static(path.resolve(__dirname, '../assets')));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`running at : http://localhost:3000`);
});

const initialState = {
  isFetching: false,
};

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const response = template('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  const response = template('Client Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
