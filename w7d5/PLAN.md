# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

# Data Structures

## gameStats

```jsx
const gameStats = {
  questionIndex: 0,
  answered: 0,
  goodAnswers: 0,
};
```

## Question

```jsx
const question = {
  id: "",
  prompt: "",
  answer: "",
};
```

## Questions

```jsx
const questions = []; // 2
const questions = {}; // 3
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - section
      - h1 score %
      - button do quiz
      - button add question
    - section
      - form
        - p question
        - input answer
        - button
    - section
      - form
        - input question
        - input answer
        - button

# Component Structure

- App
  - Header
  - Result
  - QuestionForm
  - NewQuestionForm
