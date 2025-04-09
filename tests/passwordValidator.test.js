const isPasswordValid = require('../src/passwordValidator');

describe('Validation de mot de passe (analyse partitionnelle)', () => {
  test('mot de passe valide', () => {
    expect(isPasswordValid('Password1')).toBe(true);
  });

  test('trop court', () => {
    expect(isPasswordValid('Abc1')).toBe(false);
  });

  test('sans majuscule', () => {
    expect(isPasswordValid('password1')).toBe(false);
  });

  test('sans chiffre', () => {
    expect(isPasswordValid('Password')).toBe(false);
  });

  test('avec espace', () => {
    expect(isPasswordValid('Pass word1')).toBe(false);
  });

  test('mot de passe vide', () => {
    expect(isPasswordValid('')).toBe(false);
  });

  test('entrée non string', () => {
    expect(isPasswordValid(12345678)).toBe(false);
  });
});
