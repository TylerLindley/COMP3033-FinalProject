import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from './models/user';

export const login = async (req, res) => {
  const{ identity, password } = req.body;

  let user = await User.findOne({ email: identity });
  
  if(!user) {
    user = await User.findOne({ username: identity });
  }
  //If no user found, send a "UNAUTHORIZED" status code.
  if(!user) {
    res.sendStatus(401);
    throw new Error('Incorrect username or password');
  }

  const isPasswordEqual = await bcrypt.compare(password, user.password);

  if(!isPasswordEqual) {
    res.sendStatus(401);
    throw new Error('Incorrect username or password');
  }

  //Generate a token.
  let payload = { email: user.email };

  let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256', 
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });

  let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    algorithm: 'HS256', 
    expiresIn: process.env.REFRESH_TOKEN_LIFE,
  });

  user.refreshToken = refreshToken;
  user.save(); 

  res.cookie('jwt', accessToken, {secure: accessToken, httpOnly: true});
  res.send({
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    accessToken,
  });
};

export const refresh = (req, res) => {
  let accessToken = req.cookies.jwt;

  if(!accessToken) {
    return res.sendStatus(403);
  }

  let payload;

  try {
    payload = jwt.verify(accessToken, proccess.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res.sendStatus(401); //Sends an "UNAUTHORIZED" status to the user.
  }

  const user = User.findOne({ email: payload.email });
  const refreshToken = user.refreshToken;

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch (error) {
    return res.sendStatus(401);
  }

  const newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.ACCESS_TOKEN_LIFE
  });

  res.cookie('jwt', newToken, { secure: true, httpOnly: true});
  res.send({
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    accessToken,
  });
};