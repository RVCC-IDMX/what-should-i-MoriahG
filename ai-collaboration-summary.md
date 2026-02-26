# AI collaboration summary

## Project overview

**Domain:** Pets

**AI tools used:** Github Copilot GPT-4.1

---

## Data creation

### What I asked AI to help with

I asked Copilot to help generate more pets for my data.js file.

**Prompt:**
> "Generate 15-25 more pet items for the options array with the same properties as the first two. Make them vary in animal type, such as amphibians and reptiles."

### What I verified or changed

I had to search up a few animals since it decided to name some niche specific breeds of animals that I didn't know, but upon looking them up, I verifed what they were and kept them because I recognized they were common pets. The AI did give somewhat inaccurate properties to the animals, such as poor temperament classifications and life span averages that I had to fix.

---

## Matching functions

### Functions I wrote with AI assistance

| Function name | What it does                                                    | How AI helped                 |
| ------------------ | ---------------------------------------------------------- | ----------------------------- |
| matchesName        | Checks if a pet's name matches a given string              | edited names to fit each property |
| matchesSpecies     | Checks if a pet's species matches a given string           | edited names to fit each property |
| matchesTemperament | Checks if a pet's temperament matches a given string       | edited names to fit each property |
| matchesSize        | Checks if a pet's size matches a given string              | edited names to fit each property |
| matchesMaintLevel  | Checks if a pet's maint. level matches a given string      | edited names to fit each property |
| fitsLifeSpan       | Checks if a pet's life span is <= desired max life span    | edited names to fit each property |
| fitsFeeBudget      | Checks if a pet's adoption fee is <= desired max fee budget| edited names to fit each property |
| meetsAllCriteria   | Checks if a pet meets all user preferences                 | edited names to fit each property |
| getMatchMessage    | Returns message based on how well a pet matches user prefs | edited names to fit each property |

### Code I had to fix or adjust

When autocorrecting the function names, parameters, and variables, the AI often gave the wrong names that didn't match data's properties, would place the wrong function names when using the function elsewhere, and give different names for the same parameter. I had to go back and change all of the mistakes.

---

## Reflection

### What worked well

What worked well was using AI to help figure out why my code was giving me errors despite it looking correct because it was able to quickly find camouflaged mistakes that would've taken ages to find.

### What was challenging

It was challenging to get the AI to generate good properties and their names to use in data.js that effectively encompassed what recommendation criteria I'd need, and to get it to generate a good set of temperament values that were accurate to that animal and not wasteful. So, it was easier for me to create them myself.

### What I learned

Key takeaways:
- Using AI to autocorrect and generate repetitive code saves a lot of time and manual typing labor
- AI is very susceptible to sterotypes when generating descriptive words about animals
- AI is much better at helping with technical coding issues than creative ones

---

