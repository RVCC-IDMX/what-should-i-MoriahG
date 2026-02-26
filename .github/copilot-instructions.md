# Copilot instructions

Instructions for GitHub Copilot when working on this project.

## Project context

This is a "What should I...?" recommendation tool.

**Domain:** Pets

**Purpose:** Help users find pet recommendations based on their preferences.

## Code style

- Use `const` and `let`, never `var`
- Use meaningful variable names
- Add JSDoc comments to functions
- Use strict equality (`===`) for comparisons

## Data structure

The data lives in `data.js` as a JavaScript object:

```javascript
const data = {
  domain: "Pets",
  description: "Helps users find pet recommendations based on their preferences",
  options: [
      {
      name: "Cat",
      species: "Mammal",
      temperament: "varied",
      size: "small",
      lifeSpan: 15,
      adoptionFeeAvg: 100,
      maintenanceLevel: "low",
      },
  ]
};
```

## Matching functions

Functions in `matching.js` should:

- Return `true` or `false` for matching functions
- Handle empty/null preferences (return `true` if no preference)
- Use descriptive parameter names

