import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

export const generateJwt = (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization || "";
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (error) {
    next(error);
  }
  next();
};

export const createJWTToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
