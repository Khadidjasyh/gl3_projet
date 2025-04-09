function isPasswordValid(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (/\s/.test(password)) return false;
  return true;
}
function getPasswordStrength(password) {
  if (!password || typeof password !== 'string') return 'invalide';
  let score = 0;

  // Vérification de la longueur
  if (password.length >= 8) score++;

  // Vérification de la présence de majuscules
  if (/[A-Z]/.test(password)) score++;

  // Vérification de la présence de chiffres
  if (/\d/.test(password)) score++;

  // Vérification de la présence de caractères spéciaux
  if (/[!@#$%^&(),.?":{}|<>]/.test(password)) score++;

  // Ajuster la logique de force du mot de passe
  if (score <= 2) return 'faible';    // Score de 0, 1 ou 2 est faible
  if (score === 3) return 'moyen';    // Score de 3 est moyen
  return 'fort';                      // Score de 4 est fort
}


function validatePassword(password) {
  const errors = [];

  if (typeof password !== 'string') {
    errors.push("Le mot de passe doit être une chaîne de caractères.");
  } else {
    if (password.length < 8) errors.push("Le mot de passe doit avoir au moins 8 caractères.");
    if (!/[A-Z]/.test(password)) errors.push("Le mot de passe doit contenir au moins une majuscule.");
    if (!/\d/.test(password)) errors.push("Le mot de passe doit contenir au moins un chiffre.");
    if (/\s/.test(password)) errors.push("Le mot de passe ne doit pas contenir d'espaces.");
    if (isPasswordBlacklisted(password)) errors.push("Le mot de passe est trop commun.");
  }

  return errors;
}

function isPasswordBlacklisted(password) {
  const blacklist = ['123456', 'password', 'qwerty', 'abc123'];
  return blacklist.includes(password);
}

function containsSpecialChar(password) {
  return /[!@#$%^&(),.?":{}|<>]/.test(password);
}

module.exports = {
  isPasswordValid,
  getPasswordStrength,
  validatePassword,
  isPasswordBlacklisted,
  containsSpecialChar,
};