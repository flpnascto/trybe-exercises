let testFunctions = require('../exercise04');

/* module.exports = {
  stringToUpperCase,
  firstChar,
  concatString
} */

describe('Testando implementações', () => {

  test('Mockando stringToUpperCase para lower case', () => {
    testFunctions.stringToUpperCase = jest.fn().mockImplementation(str => str.toLowerCase());

    expect(testFunctions.stringToUpperCase('ALEGRIA')).toBe('alegria');
    expect(testFunctions.stringToUpperCase).toHaveBeenCalled();
    expect(testFunctions.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(testFunctions.stringToUpperCase).toHaveBeenCalledWith('ALEGRIA');
  });

  test('Mockando firstChar para retornar o último caracter', () => {
    testFunctions.firstChar = jest.fn().mockImplementation(str => str.charAt(str.length - 1));

    expect(testFunctions.firstChar('EMOÇÃO')).toBe('O');
    expect(testFunctions.firstChar).toHaveBeenCalled();
    expect(testFunctions.firstChar).toHaveBeenCalledTimes(1);
    expect(testFunctions.firstChar).toHaveBeenCalledWith('EMOÇÃO');
  });

  test('Mockando concatString para concatenar três string', () => {
    testFunctions.concatString = jest.fn().mockImplementation((strA, strB, strC) => strA.concat(strB, strC));

    expect(testFunctions.concatString('ALEGRIA', 'Emoção', 'Coragem')).toBe('ALEGRIAEmoçãoCoragem');
    expect(testFunctions.concatString).toHaveBeenCalled();
    expect(testFunctions.concatString).toHaveBeenCalledTimes(1);
    expect(testFunctions.concatString).toHaveBeenCalledWith('ALEGRIA', 'Emoção', 'Coragem');
  });

})
