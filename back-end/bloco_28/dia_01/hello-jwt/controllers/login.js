const Joi = require('joi')
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res, next) => {

  const { error } = validateBody(req.body);

  if (error) return next(error);

  let admin = false

  const { username, password } = req.body;
  if (username === 'admin') {
    if (password !== 's3nh4S3gur4??') {
      const err = new Error('Invalid username or password');
      err.statusCode = 401;
      return next(err);
    }
    admin = true;
  }

  const payload = {
    username: req.body.username,
    admin,
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  const token = jwt.sign(payload, SECRET, jwtConfig);

  res.status(200).json({ token })
};
