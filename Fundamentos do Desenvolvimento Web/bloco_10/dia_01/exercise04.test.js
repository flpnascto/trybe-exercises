const myFizzBuzz = require('./exercise04')

test('Fizz Buzz', () => {
  expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  expect(myFizzBuzz(3)).toMatch('fizz');
  expect(myFizzBuzz(5)).toMatch('buzz');
  expect(myFizzBuzz(11)).toBe(11);
  expect(myFizzBuzz('teste')).toBe(false);
})