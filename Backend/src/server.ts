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
import jwtStrategy from 'passport-jwt';
import { Jwt } from 'jsonwebtoken';
import LocalStrategy from "passport-local"
import bcrypt from "bcryptjs"
import 'dotenv/config'
import 'express-async-errors';

import EnvVars from '@src/constants/EnvVars';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { NodeEnvs } from '@src/constants/misc';
import { RouteError } from '@src/other/classes';
import sequelize from './models/defineModels';
import { User } from './models/User';
import { VerifyOptions } from 'jsonwebtoken';

// **** Variables **** //

const app = express();


// **** Setup **** //

// security setup
passport.use(new LocalStrategy.Strategy(async (username, password, done) => {
  try {
    // STOP GAP FOR TYPE INFERENCE 
    const user: any = await User.findOne({where: {user: username}})
    console.log(username, password)
    console.log(user)
    console.log(user.password)

    if (!user) {
      return done(null, false, {message: "Incorrect Username"})
    }

    const authPass = bcrypt.compareSync(password, user.password)
    console.log(authPass)

    if (!authPass) {
      console.log("called")
      return done(null, false, {message: "Incorrect Password"})
    }
    return done(null, user)

  } catch (error) {
    done(error)
  }
}))

passport.use(new jwtStrategy.Strategy({
  jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: EnvVars.Jwt.Secret
}, async (jwt_payload, done) => {
  const user: any = await User.findOne({where: {user: jwt_payload.user}})

  if (!user) {
    return done(null, true)
  }
  return done(null, false)
}))

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

app.post("/log-in", passport.authenticate("local", {session: false}), (req: Request, res: Response) => {
  return res.status(300).json({text: "Successfuly login"})
}, (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("failed login")
  return res.status(500).json({status: "Failed log-in"})
})

app.post("/sign-up", async (req, res, next) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hashedPass) => {
      await User.create({user: req.body.username, password: hashedPass})
    })
  } catch (error) {
    next(error)
  }

  return res.json({status: "usercreation success"})
})

export default app;
