const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;

    return next(err);
  }

  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    err.statusCode(401);
    return next(err);
  }
}