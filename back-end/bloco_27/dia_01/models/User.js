const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return 'O campo primeiro nome é inválido';
  if (!lastName) return 'O campo último nome é inválido';
  if (!email) return 'O campo email é inválido';
  if (!password || password.length < 6) return 'O campo "password" deve ter pelo menos 6 caracteres';

  return '';
}

const create = async (firstName, lastName, email, password) =>
  connection()
    .then((db) => db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password,
    }));

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((users) => {
      return users.map(({ _id, firstName, lastName, email }) => {
        return {
          id: _id,
          firstName,
          lastName,
          email
        }
      })
    })
}

const findById = async (userId) => {
  const user = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(userId)))
    .catch((err) => {
      console.log(err.message);
      return null;
    });

  if (!user) return null;

  return ({
    id: user['_id'],
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
}

const updateUser = async (userId, user) =>
  connection()
    .then((db) => db.collection('users').updateOne(
      { _id: userId },
      {
        $set: {
          "firstName": user.firstName,
          "lastName": user.lastName,
          "email": user.email,
          "password": user.password
        }
      }
    ));

module.exports = {
  isValid,
  create,
  getAll,
  findById,
  updateUser,
}