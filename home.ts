import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('home');
});

export default routes;