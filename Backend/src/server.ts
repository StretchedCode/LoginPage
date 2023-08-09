/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';
import cors from 'cors';
import passport from 'passport';
import bcrypt from "bcryptjs"
import 'dotenv/config'
import 'express-async-errors';

import EnvVars from '@src/constants/EnvVars';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { NodeEnvs } from '@src/constants/misc';
import { RouteError } from '@src/other/classes';
import sequelize from './models/defineModels';
import { User } from './models/User';

// **** Variables **** //

const app = express();


// **** Setup **** //

// security setup


// Basic middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(EnvVars.CookieProps.Secret));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production) {
  app.use(helmet());
}

// Add error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});

app.get("/log-in", (req, res) => {
  res.send("Test")
  console.log('received')
})

app.post("/sign-up", async (req, res, next) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hashedPass) => {
      await User.create({user: req.body.username, password: hashedPass})
    })
  } catch (error) {
    next(error)
  }

  return res.json({status: "success"})
})

export default app;
