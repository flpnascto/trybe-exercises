const { query } = require('./connection');
const connection = require('./connection');

const serialize = (userData) => {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    password: userData.password
  }
}

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return 'O campo primeiro nome é inválido';
  if (!lastName) return 'O campo último nome é inválido';
  if (!email) return 'O campo email é inválido';
  if (!password || password.length < 6) return 'O campo "password" deve ter pelo menos 6 caracteres';

  return '';
}

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const result = await connection.execute(query, [firstName, lastName, email, password])
  return result[0].insertId;

}

const getAll = async () => {
  const [users] = await connection.execute('SELECT id, first_name, last_name, email FROM users')

  return users.map(serialize)
}

const findById = async (userId) => {
  const [user] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users_crud.users WHERE id=?',
    [userId]
  );

  if (user.length === 0) return null;

  const { firstName, lastName, email } = user.map(serialize)[0]

  return ({
    firstName,
    lastName,
    email
  });
}

const updateUser = async (userId, user) => {
  const { firstName, lastName, email, password } = user;
  const query = ('UPDATE users_crud.users SET first_name=?, last_name=?, email=?, password=? WHERE id=?');

  const result = await connection.execute(query, [firstName, lastName, email, password, userId]);

  if (result[0].affectedRows === 1) return ({ firstName, lastName, email, password });

  return {};
}

module.exports = {
  isValid,
  create,
  getAll,
  findById,
  updateUser,
}