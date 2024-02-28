import Game from "../Game";
import { fireEvent, render } from "@testing-library/react";

describe("Computer React Component", () => {
  it("shows the class cheating by default", () => {
    const renderedComponent = render(<Game />);
    // console.log(renderedComponent);

    const { getByText, getByTestId } = renderedComponent;

    // const element = getByText("🤖");
    const element = getByTestId("robot");

    expect(element).toHaveClass("cheating");

    // queryByText => Will not throw an error if not found
    // getByText => Will throw an error if not found
  });
  it("shoud disable the class cheating if we click on the robot", () => {
    const renderedComponent = render(<Game />);

    const { getByText, getByTestId } = renderedComponent;

    const element = getByTestId("robot");

    fireEvent.click(element);

    expect(element).not.toHaveClass("cheating");
  });
});
