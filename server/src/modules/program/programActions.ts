import programRespository from "./programRespository";

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programs = await programRespository.readAll();
    res.json(programs);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = (req, res, next) => {
  try {
    const programId = Number.parseInt(req.params.id);
    const program = programRespository.read(programId);

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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: Number(req.params.year),
    };
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
export default { browse, read, edit, add, destroy };
