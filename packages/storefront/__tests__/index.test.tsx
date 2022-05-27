import { render, fireEvent } from "@testing-library/react";
import Index from "../pages/home";
import Conditional from "../components/conditionla";

describe("condition", () => {
  it("submit condition output", () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId("heading")).toHaveTextContent("Storefront");
  });
});

describe("condition", () => {
  it("submit condition output", () => {
    const { queryByLabelText, getByLabelText } = render(
      <Conditional labelOn="On" labelOff="Off" />
    );

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
  });
});
