//Import access to data
import categoryRepository from "./categoryRepository";

// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const categoriesFromDB = await categoryRepository.readAll();
    res.json(categoriesFromDB);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.json(404);
  }
};

export default { browse, read };
