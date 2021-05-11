import express from "express";
import { preProcessFile } from "typescript";

const routes = express.Router();

routes.get("/builder", (req, res) => {
  const toppings: string[] = [
    "Pepperoni",
    "Sausage",
    "Chicken",
    "Mushroom",
    "Olive",
    "Green Pepper",
    "Onion",
    "Banana Pepper",
    "Anchovies",
    "Pineapple",
  ];
  res.render("builder", {
    toppings,
  });
});

routes.post("/builder-results", (req, res) => {
  const size: string = req.body.size;
  const topping: number = parseInt(req.body.topping as string);
  const gluten: boolean = req.body.gluten
  const special: string = req.body.special;
  let free: boolean = false;
  let price: number = parseFloat(req.body.price as string);
  let cost1: number = 0;
  let cost2: number = 0;
  let smallT: number = .50;
  let medT: number = 1.00;
  let largeT: number = 1.25;
  if (size === "small") {
      cost1 = 7.00 + (topping * smallT);
  } else if (size === "medium") {
      cost1 = 10.00 + (topping * medT);
  } else if (size === "large") {
      cost1 = 12.00 + (topping * largeT);
  }
  if (gluten === true) {
      cost2 = 2.00;
  }
  price = cost1 + cost2;
  let displayPrice = price.toFixed(2);
  if (price > 15) {
      free = true;
  }
  res.render("builder-results", { size, topping, gluten, special, displayPrice, free });
});

export default routes;
