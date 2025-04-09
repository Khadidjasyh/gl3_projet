const { 
    isPasswordValid, 
    getPasswordStrength, 
    validatePassword, 
    isPasswordBlacklisted, 
    containsSpecialChar 
  } = require('../src/passwordValidator');
  
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
  
    // Tests de la fonction getPasswordStrength
    test('force du mot de passe faible', () => {
      expect(getPasswordStrength('Pass123')).toBe('faible');
    });
  
    test('force du mot de passe moyen', () => {
      expect(getPasswordStrength('Password1')).toBe('moyen');
    });
  
    test('force du mot de passe fort', () => {
      expect(getPasswordStrength('Password1!')).toBe('fort');
    });
  
    // Tests de la fonction validatePassword
    test('validation d\'un mot de passe valide', () => {
      expect(validatePassword('Password1')).toEqual([]);
    });
  
    test('validation d\'un mot de passe trop court', () => {
      expect(validatePassword('Abc1')).toEqual(["Le mot de passe doit avoir au moins 8 caractères."]);
    });
  
    test('mot de passe dans la blacklist', () => {
      expect(isPasswordBlacklisted('123456')).toBe(true);
      expect(isPasswordBlacklisted('qwerty')).toBe(true);
      expect(isPasswordBlacklisted('password')).toBe(true);
      expect(isPasswordBlacklisted('strongpassword')).toBe(false);
    });
  
    // Tests de la fonction containsSpecialChar
    test('mot de passe avec un caractère spécial', () => {
      expect(containsSpecialChar('Password1!')).toBe(true);
      expect(containsSpecialChar('Password123')).toBe(false);
    });
  });
  