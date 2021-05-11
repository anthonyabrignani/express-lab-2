import express from "express";

const routes = express.Router();

routes.get("/specialty-pizza", (req, res) => {
  const name = req.query.name;
  const price = req.query.price;
  res.render("specialty-pizza", { name, price });
});

export default routes;
