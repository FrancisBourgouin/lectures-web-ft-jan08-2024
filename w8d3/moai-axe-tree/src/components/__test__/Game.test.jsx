import Game from "../Game";
import { fireEvent, render, waitForElement } from "@testing-library/react";

describe("Game flow", () => {
  it("should let the computer win all the time when choosing an option by default", () => {
    const { getByText, queryByText } = render(<Game />);

    const playerChoice = getByText("🪓");

    fireEvent.click(playerChoice);

    const waitingMessage = queryByText("Waiting for your choice!");

    waitForElement(() => getByText("Skynet has risen.")).then(() => {
      expect(waitingMessage).not.toBeInTheDocument();

      const computerWinMessage = getByText("Skynet has risen.");

      expect(computerWinMessage).toBeInTheDocument();
    });
  });
  it("should be a random outcome if the computer is disabled before choosing an option", () => {
    const { getByText, queryByText, getByTestId } = render(<Game />);

    const playerChoice = getByText("🪓");
    const computer = getByTestId("robot");

    fireEvent.click(computer);

    fireEvent.click(playerChoice);

    const waitingMessage = queryByText("Waiting for your choice!");

    waitForElement(() => getByTestId("result-message")).then(() => {
      expect(waitingMessage).not.toBeInTheDocument();

      const resultMessage = getByTestId("result-message");

      expect(resultMessage).toBeInTheDocument();
    });
  });
  it("should be a random outcome if the computer is disabled before choosing an option BUT ASYNC", async () => {
    const { getByText, queryByText, getByTestId } = render(<Game />);

    const playerChoice = getByText("🪓");
    const computer = getByTestId("robot");

    fireEvent.click(computer);

    fireEvent.click(playerChoice);

    const waitingMessage = queryByText("Waiting for your choice!");

    await waitForElement(() => getByTestId("result-message"));

    expect(waitingMessage).not.toBeInTheDocument();

    const resultMessage = getByTestId("result-message");

    expect(resultMessage).toBeInTheDocument();
  });
});

// Exploration phase
