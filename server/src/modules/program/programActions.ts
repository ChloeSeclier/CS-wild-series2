import programRespository from "./programRespository";

// Declare the action

import type { RequestHandler } from "express";

import joi from "joi";

const programSchema = joi.object({
  id: joi.number().integer().positive(),
  title: joi.string().max(255).required(),
  synopsis: joi.string(),
  poster: joi.string().uri(),
  country: joi.string().max(100),
  year: joi.number().integer().positive(),
  category_id: joi.number().integer().positive(),
});

const validate: RequestHandler = (req, res, next) => {
  const { error } = programSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programs = await programRespository.readAll();
    res.json(programs);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);
    const program = await programRespository.read(programId);

    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};
const edit: RequestHandler = async (req, res, next) => {
  try {
    const program = {
      id: Number(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: Number(req.params.year),
      category_id: Number(req.params.category_id),
    };
    const affectedRows = await programRespository.update(program);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// const add: RequestHandler = async (req, res, next) => {
//   try {
//     const newProgram = {
//       title: req.body.title,
//       synopsis: req.body.synopsis,
//       poster: req.body.poster,
//       country: req.body.country,
//       year: Number(req.body.year),
//     };

//     console.log("Données reçues:", req.body);

//     const insertId = await programRespository.create(newProgram);
//     res.status(201).json({ insertId });

//   } catch (err) {
//     console.error("Erreur serveur :", err);
//     next(err);
//   }
// };

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: Number(req.body.year),
      category_id: Number(req.body.category_id),
    };

    // Validation avec Joi
    const { error } = programSchema.validate(req.body);
    if (error) {
      console.error("Erreur de validation :", error.details);
      res.status(400).json({
        message: "Erreur de validation des données",
        details: error.details,
      });
      return;
    }

    // Essai d'insertion dans la base de données
    const insertId = await programRespository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);
    await programRespository.delete(programId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Export it
export default { browse, read, edit, add, destroy, validate };
