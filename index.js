// celestial-harmony-utils.js

const randomWords = require('random-words');

// Function to generate a celestial mantra
function generateCelestialMantra() {
  const adjectives = ['harmonious', 'serene', 'transcendent', 'cosmic', 'ethereal'];
  const nouns = ['alignment', 'balance', 'harmony', 'serenity', 'unity'];
  const adjective = randomWords({ exactly: 1, wordsPerString: 1, seed: Date.now() })[0];
  const noun = randomWords({ exactly: 1, wordsPerString: 1, seed: Date.now() + 1 })[0];
  return `${adjective} ${noun}`;
}

// Function to generate a random cosmic symbol
function generateCosmicSymbol() {
  const symbols = ['☀️', '🌙', '⭐', '🌌', '🌠'];
  return randomWords({ exactly: 1, wordsPerString: 1, seed: Date.now() + 2 })[0];
}

// Function to check if a word is in celestial language
function isCelestialWord(word) {
  const celestialWords = ['stardust', 'cosmos', 'eternity', 'transcendence', 'infinity'];
  return celestialWords.includes(word.toLowerCase());
}

module.exports = {
  generateCelestialMantra,
  generateCosmicSymbol,
  isCelestialWord
};
