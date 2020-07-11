import express from 'express';
import path from 'path';
import cors from 'cors';
import i18next from 'i18next';
import middleware from 'i18next-express-middleware';
import nodeFsBackend from 'i18next-node-fs-backend';
import template from './shared/template';
import ssr from './server/server';
import logger from './server/logger';

const app = express();

app.use('/build', express.static(path.resolve(__dirname, '../build')));

// Init i18n
i18next
  .use(middleware.LanguageDetector)
  .use(nodeFsBackend)
  .init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    lowerCaseLng: true,
    preload: ['en'],
    backend: {
      loadPath: path.join(`${__dirname}../assets/locales/{{lng}}/{{ns}}.json`),
    },
    useCookie: false,
  });

// setup i18n for app
app.use(
  middleware.handle(i18next, {
    removeLngFromUrl: false,
  })
);

// cors configuration
app.use(cors());
app.options('*', cors());

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  return logger.appStarted(process.env.PORT || 3000, 'localhost');
});

const initialState = {
  isFetching: false,
};

// Serving static files
app.use('', express.static(path.resolve(__dirname, '../assets')));

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
