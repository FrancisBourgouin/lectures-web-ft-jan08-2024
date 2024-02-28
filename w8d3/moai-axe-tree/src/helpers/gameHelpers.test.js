import { pickOppositeChoice, pickRandomChoice, declareWinner } from "./gameHelpers";

// 🗿-🪓-🌳

// 🗿 wins 🪓
// 🪓 wins 🌳
// 🌳 wins 🗿

describe("pickOppositeChoice tests", () => {
  // Sanity Check + WCGW
  it("picks the opposite choice when given a valid emoji as input", () => {
    const winningPairs = {
      "🪓": "🗿",
      "🗿": "🌳",
      "🌳": "🪓",
    };

    for (const userChoice in winningPairs) {
      const expectedResult = winningPairs[userChoice];
      const actualResult = pickOppositeChoice(userChoice);
      expect(actualResult).toBe(expectedResult);
    }
  });
  it("should throw an error if the input emoji is invalid", () => {
    const badInput1 = undefined;
    const badInput2 = "🐔";

    const throwyFunction1 = () => pickOppositeChoice(badInput1);
    expect(throwyFunction1).toThrow();

    const throwyFunction2 = () => pickOppositeChoice(badInput2);
    expect(throwyFunction2).toThrow();
  });
});

describe("pickRandomChoice tests", () => {
  it("should return a valid emoji at all times", () => {
    // Seed => Source of randomness
    // Math.random() => 0,1[

    const pairs = {
      0.15: "🗿",
      0.45: "🌳",
      0.75: "🪓",
    };

    for (const randomSeed in pairs) {
      const expectedResult = pairs[randomSeed];
      const actualResult = pickRandomChoice(Number(randomSeed));
      expect(actualResult).toBe(expectedResult);
    }
  });

  it("should throw an error if the seed is not a number between 0 - 1", () => {
    const badInput = 2;

    const throwyFunction = () => pickRandomChoice(badInput);

    expect(throwyFunction).toThrow();
  });
});

describe("declareWinner tests", () => {
  it("should return tie if the choices are the same", () => {
    const playerChoice = "🗿";
    const computerChoice = "🗿";

    const expectedResult = "tie";
    const actualResult = declareWinner(computerChoice, playerChoice);

    expect(actualResult).toBe(expectedResult);
  });
  it("should return computer if the computer won", () => {
    const playerChoice = "🗿";
    const computerChoice = "🌳";

    const expectedResult = "computer";
    const actualResult = declareWinner(computerChoice, playerChoice);

    expect(actualResult).toBe(expectedResult);
  });
  it("should return player if the player won", () => {
    const playerChoice = "🌳";
    const computerChoice = "🗿";

    const expectedResult = "player";
    const actualResult = declareWinner(computerChoice, playerChoice);

    expect(actualResult).toBe(expectedResult);
  });
  it("should throw an error if any of the inputs is invalid", () => {
    const computerChoice = "🗿";
    const playerChoice = "🚽";

    const throwyFunction = () => declareWinner(computerChoice, playerChoice);

    expect(throwyFunction).toThrow();
  });
});
