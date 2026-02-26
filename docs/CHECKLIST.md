# Submission checklist

Verify your project before submitting.

---

## Data file

- [x] `data.js` contains valid JavaScript (no red squiggles in VS Code)
- [x] Domain and description fields are filled in
- [x] Options array has 15-25 items
- [x] Each item has the same properties (consistent schema)
- [x] Property names use camelCase
- [x] No trailing commas after the last property

---

## Matching functions

- [x] `matching.js` has at least 4 functions
- [x] Each function has a JSDoc comment explaining what it does (see [JSDoc basics](tutorials/jsdoc-basics.md))
- [x] Functions use proper JS concepts:
  - [x] At least one uses simple conditionals
  - [x] At least one uses comparison operators (>, <, >=, <=)
  - [x] At least one uses logical operators (&&)
  - [x] At least one uses if/else chain
- [x] Functions return the correct type (boolean or string)

---

## App logic

- [x] Recommendations appear when form is submitted
- [x] "No results" message shows when nothing matches
- [x] Recommendation cards display your item properties
- [x] Category dropdown has your domain's categories
- [x] No errors in browser console

---

## Documentation

- [x] `README.md` describes your domain and project
- [x] `.github/copilot-instructions.md` is customized for your domain
- [x] `ai-collaboration-summary-template.md` is completed and renamed

---

## Deployment

- [x] Site is deployed to Netlify
- [x] Live URL is added to README
- [x] All form filters work on the live site
- [x] Recommendations display correctly online
- [x] No console errors on the live site

---

## Git history

- [x] Multiple commits throughout the project
- [x] Commit messages describe what changed
- [x] No node_modules, .specstory, or .claude folders committed

---

## Final check

- [x] Open `index.html` in browser - does it work?
- [x] Try different preference combinations
- [x] Check browser console for errors (F12 → Console)
