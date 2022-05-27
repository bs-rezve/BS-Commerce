import { render, screen, fireEvent } from "@testing-library/react";
import Index from "../components/formSubmit";

describe("Add", () => {
  it("submit add output", () => {
    render(<Index />);
    // check if all components are rendered
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });
    addButton.click();
    expect(resultArea).toHaveTextContent("13");
  });
});

describe("Sub", () => {
  it("submit sub output", () => {
    render(<Index />);
    // check if all components are rendered
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const subButton = screen.getByTestId("sub");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });
    subButton.click();
    expect(resultArea).toHaveTextContent("-3");
  });
});
