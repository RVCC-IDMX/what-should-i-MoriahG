/**
 * Matching functions for your recommendation system
 *
 * Write functions that check if an item matches user preferences.
 * You need at least 4 functions using different JS concepts:
 *
 * 1. Single criteria match (simple conditional)
 * 2. Range check (comparison operators)
 * 3. Multiple criteria match (logical operators: &&)
 * 4. Classification function (if/else chain)
 */

// ===================================================================
// MY FUNCTIONS - Each animal property has criteria checking functions
// ===================================================================

/**
 * Checks if an animal matches the desired name
 * @param {Object} animal - An animal from data
 * @param {string} desiredName - The animal name the user wants
 * @returns {boolean} - True if the animal matches the desired name
 */
function matchesName(animal, desiredName) {
  // If no name preference, everything matches
  if (!desiredName) {
    return true;
  }

  // Check if the animal's name matches the desired name
  return animal.name === desiredName;
}

/**
 * Checks if an animal matches the desired species
 * @param {Object} animal - An animal from data
 * @param {string} desiredSpecies - The species the user wants
 * @returns {boolean} - True if the animal matches the desired species
 */
function matchesSpecies(animal, desiredSpecies) {
  if (!desiredSpecies) {
    return true;
  }

  return animal.species === desiredSpecies;
}

/**
 * Checks if an animal matches the desired temperament
 * @param {Object} animal - An animal from data
 * @param {string} desiredTemperament - The temperament the user wants
 * @returns {boolean} - True if the animal matches the desired temperament
 */
function matchesTemperament(animal, desiredTemperament) {
  if (!desiredTemperament) {
    return true;
  }

  return animal.temperament === desiredTemperament;
}

/**
 * Checks if an animal matches the desired size
 * @param {Object} animal - An animal from data
 * @param {string} desiredSize - The size the user wants
 * @returns {boolean} - True if the animal matches the desired size
 */
function matchesSize(animal, desiredSize) {
  if (!desiredSize) {
    return true;
  }

  return animal.size === desiredSize;
}

/**
 * Checks if an animal matches the desired maintenance level
 * @param {Object} animal - An animal from data
 * @param {string} desiredMaintLevel - The maintenance level the user wants
 * @returns {boolean} - True if the animal matches the desired maintenance level
 */
function matchesMaintLevel(animal, desiredMaintLevel) {
  if (!desiredMaintLevel) {
    return true;
  }

  return animal.maintenanceLevel === desiredMaintLevel;
}

/**
 * Checks if an animal fits the desired life span
 * @param {Object} animal - An animal from data
 * @param {number} maxLifeSpan - Maximum life span allowed
 * @returns {boolean} - True if the animal fits the desired life span
 */
function fitsLifeSpan(animal, maxLifeSpan) {
  // If no life span constraint, everything fits
  if (!maxLifeSpan) {
    return true;
  }

  // Check if animal's life span is within available time
  return animal.lifeSpan <= maxLifeSpan;
}

/**
 * Checks if an animal fits the users adoption fee budget
 * @param {Object} animal - An animal from data
 * @param {number} maxFee - Maximum fee allowed
 * @returns {boolean} - True if the animal fits the users adoption fee budget
 */
function fitsFeeBudget(animal, maxFee) {
  if (!maxFee) {
    return true;
  }

  return animal.adoptionFeeAvg <= maxFee;
}

/**
 * Checks if an animal matches multiple criteria at once
 * @param {Object} animal - An animal from data
 * @param {Object} prefs - Object with user preferences
 * @returns {boolean} - True if animal matches ALL criteria
 */
function meetsAllCriteria(animal, prefs) {
  // Use && to combine multiple checks
  return (
    matchesName(animal, prefs.name) &&
    matchesSpecies(animal, prefs.species) &&
    matchesTemperament(animal, prefs.temperament) &&
    matchesSize(animal, prefs.size) &&
    matchesMaintLevel(animal, prefs.maintenanceLevel) &&
    fitsLifeSpan(animal, prefs.lifeSpan) &&
    fitsFeeBudget(animal, prefs.adoptionFeeAvg)
  );
}

/**
 * Returns a message based on how well an animal matches user preferences
 * @param {number} matchScore - How many criteria matched (0-7)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(matchScore) {
  if (matchScore === 0) {
    return "This pet doesn't match your preferences.";
  } else if (matchScore < 3) { // 1-2
    return "This pet has some potential!";
  } else if (matchScore < 5) { // 3-4
    return "This pet is worth considering!";
  } else if (matchScore < 7) { // 5-6
    return "This is a great pet option!";
  } else { // 7
    return "This is the perfect pet for you!";
  }
}



