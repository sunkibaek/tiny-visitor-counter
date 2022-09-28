import { render, screen, fireEvent } from "@testing-library/react-native";

import HomeScreen from "../";

let mockDefaults;

jest.mock("../../../models/Counter", () => {
  mockDefaults = {
    max: 3,
    limit: 4,
  };

  return {
    ...jest.requireActual("../../../models/Counter"),
    DEFAULTS: mockDefaults,
  };
});

describe("HomeScreen", () => {
  it("renders correctly", () => {
    render(<HomeScreen />);

    expect(screen).toMatchSnapshot();
  });

  describe("counter", () => {
    it("increments the counter when the Enter button is pressed", () => {
      render(<HomeScreen />);
      const enterButton = screen.getByText("Enter");

      fireEvent.press(enterButton);

      expect(screen.getByTestId("currentVisitorText")).toBeTruthy();
    });

    it("decrements the counter when the Exit button is pressed", () => {
      render(<HomeScreen />);
      const enterButton = screen.getByText("Enter");
      const exitButton = screen.getByText("Exit");

      fireEvent.press(enterButton);
      fireEvent.press(exitButton);

      expect(screen.getByTestId("currentVisitorText")).toBeTruthy();
    });

    it("does not decrement the counter below 0", () => {
      render(<HomeScreen />);
      const exitButton = screen.getByText("Exit");

      fireEvent.press(exitButton);

      expect(screen.getByTestId("currentVisitorText")).toBeTruthy();
    });

    it("does not increment the counter above the limit", () => {
      mockDefaults.limit = 4;
      mockDefaults.max = 3;
      render(<HomeScreen />);
      const enterButton = screen.getByText("Enter");

      for (let i = 0; i < mockDefaults.limit + 1; i += 1) {
        fireEvent.press(enterButton);
      }

      expect(screen.getByTestId("currentVisitorText").props.children).toBe(
        mockDefaults.limit
      );
    });

    it("applies the warning color when the current counter equals to the max counter", () => {
      render(<HomeScreen />);
      const enterButton = screen.getByText("Enter");

      for (let i = 0; i < mockDefaults.max; i += 1) {
        fireEvent.press(enterButton);
      }

      expect(screen).toMatchSnapshot();
    });

    it("applies the danger color when the current counter is greater than the max counter", () => {
      render(<HomeScreen />);
      const enterButton = screen.getByText("Enter");

      for (let i = 0; i < mockDefaults.max + 1; i += 1) {
        fireEvent.press(enterButton);
      }

      expect(screen).toMatchSnapshot();
    });
  });
});
