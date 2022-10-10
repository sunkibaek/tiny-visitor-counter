import { render, screen, fireEvent } from "@testing-library/react-native";

import Button from "../Button";

describe("Button", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("with title", () => {
    it("renders correctly", () => {
      render(<Button title="Test Button" />);

      expect(screen.toJSON()).toMatchSnapshot();
    });

    it("renders title", () => {
      const titleText = "Test Button";

      render(<Button title={titleText} />);

      const title = screen.getByText(titleText);
      expect(title.props.children).toBe(titleText);
    });
  });

  describe("with onPress", () => {
    it("calls onPress when pressed", () => {
      const onPress = jest.fn();
      const titleText = "Test Button";
      render(<Button onPress={onPress} title={titleText} />);

      const title = screen.getByText(titleText);
      fireEvent.press(title);

      expect(onPress).toBeCalledTimes(1);
    });
  });
});
