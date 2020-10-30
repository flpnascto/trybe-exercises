let randomNumbers = require('../exercise01');

describe('Testando a função randomNumbers', () => {
  test('Se a função foi chamada', () => {
    randomNumbers = jest.fn().mockReturnValue(10);

    randomNumbers();
    expect(randomNumbers).toHaveBeenCalled();
    expect(randomNumbers).toHaveBeenCalledTimes(1);
    expect(randomNumbers()).toBe(10);
  });
})
