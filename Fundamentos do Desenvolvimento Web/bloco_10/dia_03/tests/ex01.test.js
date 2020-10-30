let randomNumbers = require('../exercise01');

describe('Testando a função randomNumbers', () => {
  test('Se a função foi chamada, quantas vezes e o seu retorno', () => {
    randomNumbers = jest.fn().mockReturnValue(10);

    randomNumbers();
    expect(randomNumbers).toHaveBeenCalled();
    expect(randomNumbers).toHaveBeenCalledTimes(1);
    expect(randomNumbers()).toBe(10);
  });

  test('E o seu retorno com os respectivos parâmentros foram passados', () => {
    randomNumbers = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumbers(8, 4)).toBe(2);
    expect(randomNumbers).toHaveBeenCalledWith(8, 4);
  })
})

