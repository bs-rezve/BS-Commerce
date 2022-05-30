import { render, fireEvent } from "@testing-library/react";
import Index from "../pages/home";
import Conditional from "../components/conditionla";

describe("Home Page", () => {
  //it or test
  it("Show heading output", () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId("heading")).toHaveTextContent("Storefront");
  });

  it("Show para output", () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId("para")).toHaveTextContent(
      "With this shop hompeage template"
    );
  });
});

describe("Conditional Components", () => {
  it("submit condition output", () => {
    const { queryByLabelText, getByLabelText } = render(
      <Conditional labelOn="On" labelOff="Off" />
    );

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
  });
});
