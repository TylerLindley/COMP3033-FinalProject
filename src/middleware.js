import jwt from 'jsonwebtoken';
import User from './models/user';

export const verify = async (req, res, next) => {
  let accessToken = req.cookies.jwt;

  if (!accessToken) {
    return res.sendStatus(403);
  }

  let payload;

  try {
    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ email: payload.email });
    req.userId = user._id;
    req.isAdmin = user.isAdmin;
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
}