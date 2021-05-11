import express from 'express';

const routes = express.Router();

routes.get("/review", (req, res) => {
  res.render("review");
});

routes.post("/review-results", (req, res) => {
    const name: string = req.body.name;
    const comment: string = req.body.comment;
    const rating: number = parseInt(req.body.rating as string);
    res.render("review-results", {name, comment, rating});
  });

export default routes;