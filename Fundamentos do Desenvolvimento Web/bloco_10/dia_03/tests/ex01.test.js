let randomNumbers = require('../exercise01');

describe('Testando a função randomNumbers', () => {
  test('Se a função foi chamada, quantas vezes e o seu retorno', () => {
    randomNumbers = jest.fn().mockReturnValue(10);

    randomNumbers();
    expect(randomNumbers).toHaveBeenCalled();
    expect(randomNumbers).toHaveBeenCalledTimes(1);
    expect(randomNumbers()).toBe(10);
  });

  test('Mockando com implementação (a, b) => a / b', () => {
    randomNumbers = jest.fn().mockImplementation((a, b) => a / b);

    expect(randomNumbers(8, 4)).toBe(2);
    expect(randomNumbers).toHaveBeenCalled();
    expect(randomNumbers).toHaveBeenCalledTimes(1);
    expect(randomNumbers).toHaveBeenCalledWith(8, 4);
  })

  test('Mockando com implementação (a, b, c) => a * b * c', () => {
    randomNumbers = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumbers(2, 4, 8)).toBe(64);
    expect(randomNumbers).toHaveBeenCalled();
    expect(randomNumbers).toHaveBeenCalledTimes(1);
    expect(randomNumbers).toHaveBeenCalledWith(2, 4, 8);

  })
  
    test('resetando e mockando com implementação (a) => a * 2', () => {
      randomNumbers.mockReset();
      expect(randomNumbers).toHaveBeenCalledTimes(0);

      randomNumbers = jest.fn().mockImplementation(a => a * 2);
  
      expect(randomNumbers(3)).toBe(6);
      expect(randomNumbers).toHaveBeenCalled();
      expect(randomNumbers).toHaveBeenCalledTimes(1);
      expect(randomNumbers).toHaveBeenCalledWith(3);
  })
})

