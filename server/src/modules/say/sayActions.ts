import type { RequestHandler } from "express";
const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  console.info("coucou");
  res.send(`Welcome to Wild Series, ${req.query.name} !`);
};

export default { sayWelcome };
