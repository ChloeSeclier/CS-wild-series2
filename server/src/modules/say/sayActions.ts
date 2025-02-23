import type { RequestHandler } from "express";
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Hello series");
};

export default { sayWelcome };
