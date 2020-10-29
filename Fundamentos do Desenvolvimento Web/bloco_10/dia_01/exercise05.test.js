const obj = require('./exercise05')

test('object compare', () => {
  expect(obj.obj1).toEqual(obj.obj2);
  expect(obj.obj1).not.toEqual(obj.obj3);
  expect(obj.obj2).not.toEqual(obj.obj3);
});
