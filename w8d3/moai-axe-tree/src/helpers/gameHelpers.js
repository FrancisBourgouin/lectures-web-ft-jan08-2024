export const pickOppositeChoice = (playerChoice) => {
  // Pick opposite of player
  const choices = ["🗿", "🌳", "🪓", "🗿"];

  if (!playerChoice || !choices.includes(playerChoice)) {
    throw new Error("HEY CHOOSE VALID INPUT YOU DUM DUM.");
  }

  return choices[choices.indexOf(playerChoice) + 1];
};

export const pickRandomChoice = (seed) => {
  // Pick a random from a set
  if (typeof seed !== "number" || seed < 0 || seed >= 1) {
    throw new Error("THAT AINT A VALID SEED DUDE");
  }

  const choices = ["🗿", "🌳", "🪓"];

  const randomIndex = Math.floor(seed * 3);

  return choices[randomIndex];
};

export const declareWinner = (computerChoice, playerChoice) => {
  // Picks a winner between computer & player
  const choices = ["🗿", "🌳", "🪓"];

  const invalidComputerChoice = !computerChoice || !choices.includes(computerChoice);
  const invalidPlayerChoice = !playerChoice || !choices.includes(playerChoice);

  if (invalidComputerChoice || invalidPlayerChoice) {
    throw new Error("HEY CHOOSE VALID INPUT YOU DUM DUM.");
  }
  const winningPairs = {
    "🪓": "🗿",
    "🗿": "🌳",
    "🌳": "🪓",
  };

  if (computerChoice === playerChoice) {
    return "tie";
  }

  if (computerChoice === winningPairs[playerChoice]) {
    return "computer";
  }

  return "player";
};
