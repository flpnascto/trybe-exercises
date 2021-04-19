const SECRET = process.env.SECRET;

module.exports = (req, res, next) => {
  const { admin } = req.user;

  if (!admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;
    return next(err);
  }

  next();
}