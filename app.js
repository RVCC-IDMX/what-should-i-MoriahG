/**
 * Main application logic
 *
 * This file connects the UI to your data and matching functions.
 * It handles:
 * 1. Getting user preferences from the form
 * 2. Filtering options using your matching functions
 * 3. Displaying recommendations in the UI
 */

// Get references to DOM elements
const form = document.getElementById("preference-form");
const resultsList = document.getElementById("recommendation-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get user preferences from the form
  const preferences = {
    species: document.getElementById("species").value,
    temperament: document.getElementById("temperament").value,
    size: document.getElementById("size").value,
    lifeSpan: document.getElementById("lifeSpan").value,
    adoptionFeeAvg: document.getElementById("adoptionFeeAvg").value,
    maintenanceLevel: document.getElementById("maintenanceLevel").value,
  };

  // Convert lifeSpan and adoptionFeeAvg to a number (it comes as a string from the form)
  if (preferences.lifeSpan) {
    preferences.lifeSpan = Number(preferences.lifeSpan);
  }
  if (preferences.adoptionFeeAvg) {
    preferences.adoptionFeeAvg = Number(preferences.adoptionFeeAvg);
  }

  // Find matching recommendations
  const recommendations = findRecommendations(preferences);

  // Display the results
  displayRecommendations(recommendations);
});

/**
 * Finds options that match the user's preferences
 * @param {Object} preferences - The user's preferences from the form
 * @returns {Array} - Array of matching options
 */
function findRecommendations(preferences) {
  const matches = [];

  // Loop through all options and check each one
  for (let i = 0; i < data.options.length; i++) {
    const animal = data.options[i];

    // Use your matching function to check if this animal matches
    if (meetsAllCriteria(animal, preferences)) {
      matches.push(animal);
    }
  }

  return matches;
}

/**
 * Displays the recommendations in the UI
 * @param {Array} recommendations - Array of matching options
 */
function displayRecommendations(recommendations) {
  // Clear previous results
  resultsList.innerHTML = "";

  // Check if we found any matches
  if (recommendations.length === 0) {
    resultsList.innerHTML =
      '<p class="no-results">No matches found. Try adjusting your preferences!</p>';
    return;
  }

  // Create a card for each recommendation
  for (let i = 0; i < recommendations.length; i++) {
    const animal = recommendations[i];
    const card = createRecommendationCard(animal);
    resultsList.appendChild(card);
  }
}

/**
 * Creates an HTML element for a recommendation
 * @param {Object} animal - The recommendation item
 * @returns {HTMLElement} - A div element with the recommendation details
 */
function createRecommendationCard(animal) {
  const card = document.createElement("div");
  card.className = "recommendation-card";

  // TODO: Customize this to display your item's properties
  //
  // SECURITY NOTE: Using innerHTML with template literals is safe here because
  // our data comes from data.js (hardcoded, not user input). If this data came
  // from user input or an external API, we'd need to sanitize it first to prevent
  // XSS (Cross-Site Scripting) attacks. For user-generated content, use textContent
  // instead, or a sanitization library. We'll learn more about this in later weeks!
  card.innerHTML = `
    <h3>${animal.name}</h3>
    <p>Species: ${animal.species}</p>
    <p>Temperament: ${animal.temperament}</p>
    <p>Size: ${animal.size} </p>
    <p>Life Span: ${animal.lifeSpan} years</p>
    <p>Adoption Fee: $${animal.adoptionFeeAvg}</p>
    <p>Maintenance Level: ${animal.maintenanceLevel}</p>
  `;

  return card;
}
